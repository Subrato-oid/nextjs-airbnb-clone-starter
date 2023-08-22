import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Whislist } from "../whislist/Whislist";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy?: User | null;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmenities: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: number;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  whislists?: Array<Whislist>;
};
