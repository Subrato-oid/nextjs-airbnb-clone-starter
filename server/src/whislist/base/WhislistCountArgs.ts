/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WhislistWhereInput } from "./WhislistWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class WhislistCountArgs {
  @ApiProperty({
    required: false,
    type: () => WhislistWhereInput,
  })
  @Field(() => WhislistWhereInput, { nullable: true })
  @Type(() => WhislistWhereInput)
  where?: WhislistWhereInput;
}

export { WhislistCountArgs as WhislistCountArgs };
