import { createClient } from '@supabase/supabase-js';

// These need to be added to your .env file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if credentials are valid (not placeholder)
const hasValidCredentials =
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== 'YOUR_PROJECT_URL_HERE' &&
  supabaseAnonKey !== 'YOUR_ANON_KEY_HERE' &&
  supabaseAnonKey.startsWith('eyJ'); // Valid JWT starts with eyJ

// Only create client if we have valid credentials
export const supabase = hasValidCredentials
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

// Helper to check if storage is available
export const isStorageAvailable = () => {
  return supabase !== null;
};

// Storage bucket name for attachments
export const ATTACHMENTS_BUCKET = 'attachments';

/**
 * Upload a file to Supabase Storage
 * @param file - The file to upload
 * @param path - Optional custom path (defaults to auto-generated)
 * @returns Object with url and file metadata
 */
export async function uploadFile(file: File, path?: string) {
  if (!supabase) {
    throw new Error(
      'Supabase Storage not configured. Please add valid NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env file'
    );
  }

  try {
    // Generate unique filename if path not provided
    const fileName = path ?? `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const filePath = `uploads/${fileName}`;

    // Upload file
    const { error } = await supabase.storage
      .from(ATTACHMENTS_BUCKET)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) throw error;

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(ATTACHMENTS_BUCKET)
      .getPublicUrl(filePath);

    return {
      url: urlData.publicUrl,
      path: filePath,
      name: file.name,
      size: file.size,
      type: file.type,
    };
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

/**
 * Delete a file from Supabase Storage
 * @param path - The file path to delete
 */
export async function deleteFile(path: string) {
  if (!supabase) {
    throw new Error('Supabase Storage not configured');
  }

  try {
    const { error } = await supabase.storage
      .from(ATTACHMENTS_BUCKET)
      .remove([path]);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
}

/**
 * Get a signed URL for a private file (expires in 1 hour)
 * @param path - The file path
 * @returns Signed URL
 */
export async function getSignedUrl(path: string) {
  if (!supabase) {
    throw new Error('Supabase Storage not configured');
  }

  try {
    const { data, error } = await supabase.storage
      .from(ATTACHMENTS_BUCKET)
      .createSignedUrl(path, 3600); // 1 hour

    if (error) throw error;
    return data.signedUrl;
  } catch (error) {
    console.error('Error getting signed URL:', error);
    throw error;
  }
}
