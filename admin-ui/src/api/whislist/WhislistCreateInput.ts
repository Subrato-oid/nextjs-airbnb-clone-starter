import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WhislistCreateInput = {
  listing: ListingWhereUniqueInput;
  user: UserWhereUniqueInput;
};
