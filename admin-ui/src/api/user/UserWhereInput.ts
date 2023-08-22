import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WhislistListRelationFilter } from "../whislist/WhislistListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  listings?: ListingWhereUniqueInput;
  trips?: TripListRelationFilter;
  username?: StringFilter;
  whislists?: WhislistListRelationFilter;
};
