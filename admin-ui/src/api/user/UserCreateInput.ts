import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutUsersInput } from "./TripCreateNestedManyWithoutUsersInput";
import { WhislistCreateNestedManyWithoutUsersInput } from "./WhislistCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingWhereUniqueInput | null;
  password: string;
  roles: InputJsonValue;
  trips?: TripCreateNestedManyWithoutUsersInput;
  username: string;
  whislists?: WhislistCreateNestedManyWithoutUsersInput;
};
