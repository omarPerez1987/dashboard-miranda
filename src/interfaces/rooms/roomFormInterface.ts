export interface RoomFormInterface {
  // image1: string | null;
  // image2: string | null;
  // image3: string | null;
  // image4: string | null;
  // image5: string | null;
  id?: string;
  photo: string | null;
  room: string;
  bed: string;
  facilities: string[];
  description: string;
  price: number;
  discount: number;
  cancel: string;
  status: string;
}
