import { FoodEntry } from "../types/FoodEntry";

export interface IPhotoRepository {
  getAllEntries(): Promise<FoodEntry[]>;
}
