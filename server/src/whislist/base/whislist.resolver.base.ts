/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateWhislistArgs } from "./CreateWhislistArgs";
import { UpdateWhislistArgs } from "./UpdateWhislistArgs";
import { DeleteWhislistArgs } from "./DeleteWhislistArgs";
import { WhislistCountArgs } from "./WhislistCountArgs";
import { WhislistFindManyArgs } from "./WhislistFindManyArgs";
import { WhislistFindUniqueArgs } from "./WhislistFindUniqueArgs";
import { Whislist } from "./Whislist";
import { Listing } from "../../listing/base/Listing";
import { User } from "../../user/base/User";
import { WhislistService } from "../whislist.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Whislist)
export class WhislistResolverBase {
  constructor(
    protected readonly service: WhislistService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Whislist",
    action: "read",
    possession: "any",
  })
  async _whislistsMeta(
    @graphql.Args() args: WhislistCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Whislist])
  @nestAccessControl.UseRoles({
    resource: "Whislist",
    action: "read",
    possession: "any",
  })
  async whislists(
    @graphql.Args() args: WhislistFindManyArgs
  ): Promise<Whislist[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Whislist, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Whislist",
    action: "read",
    possession: "own",
  })
  async whislist(
    @graphql.Args() args: WhislistFindUniqueArgs
  ): Promise<Whislist | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Whislist)
  @nestAccessControl.UseRoles({
    resource: "Whislist",
    action: "create",
    possession: "any",
  })
  async createWhislist(
    @graphql.Args() args: CreateWhislistArgs
  ): Promise<Whislist> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        listing: {
          connect: args.data.listing,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Whislist)
  @nestAccessControl.UseRoles({
    resource: "Whislist",
    action: "update",
    possession: "any",
  })
  async updateWhislist(
    @graphql.Args() args: UpdateWhislistArgs
  ): Promise<Whislist | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          listing: {
            connect: args.data.listing,
          },

          user: {
            connect: args.data.user,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Whislist)
  @nestAccessControl.UseRoles({
    resource: "Whislist",
    action: "delete",
    possession: "any",
  })
  async deleteWhislist(
    @graphql.Args() args: DeleteWhislistArgs
  ): Promise<Whislist | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Listing, {
    nullable: true,
    name: "listing",
  })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "any",
  })
  async resolveFieldListing(
    @graphql.Parent() parent: Whislist
  ): Promise<Listing | null> {
    const result = await this.service.getListing(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async resolveFieldUser(
    @graphql.Parent() parent: Whislist
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}