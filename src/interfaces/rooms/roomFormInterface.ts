export interface RoomFormInterface {
  image1: string | null;
  image2: string | null;
  image3: string | null;
  image4: string | null;
  image5: string | null;
  id: string;
  roomType: string;
  roomNumber: string;
  description: string;
  offer: string;
  price: number;
  discount: number;
  cancellation: string;
  facilities: string[];
}
