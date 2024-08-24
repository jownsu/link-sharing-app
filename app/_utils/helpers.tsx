import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fileToBlob = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
          if (reader.result) {
              resolve(reader.result as string);
          } else {
              reject(new Error("Failed to convert file to string."));
          }
      };

      reader.onerror = () => {
          reject(new Error("Failed to read file."));
      };
  });
};