/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ListingService } from "../listing.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ListingCreateInput } from "./ListingCreateInput";
import { ListingWhereInput } from "./ListingWhereInput";
import { ListingWhereUniqueInput } from "./ListingWhereUniqueInput";
import { ListingFindManyArgs } from "./ListingFindManyArgs";
import { ListingUpdateInput } from "./ListingUpdateInput";
import { Listing } from "./Listing";
import { TripFindManyArgs } from "../../trip/base/TripFindManyArgs";
import { Trip } from "../../trip/base/Trip";
import { TripWhereUniqueInput } from "../../trip/base/TripWhereUniqueInput";
import { WhislistFindManyArgs } from "../../whislist/base/WhislistFindManyArgs";
import { Whislist } from "../../whislist/base/Whislist";
import { WhislistWhereUniqueInput } from "../../whislist/base/WhislistWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ListingControllerBase {
  constructor(
    protected readonly service: ListingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Listing })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ListingCreateInput): Promise<Listing> {
    return await this.service.create({
      data: {
        ...data,

        listingCreatedBy: data.listingCreatedBy
          ? {
              connect: data.listingCreatedBy,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        id: true,

        listingCreatedBy: {
          select: {
            id: true,
          },
        },

        locationData: true,
        locationType: true,
        mapData: true,
        photos: true,
        placeAmenities: true,
        placeSpace: true,
        placeType: true,
        price: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Listing] })
  @ApiNestedQuery(ListingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Listing[]> {
    const args = plainToClass(ListingFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,

        listingCreatedBy: {
          select: {
            id: true,
          },
        },

        locationData: true,
        locationType: true,
        mapData: true,
        photos: true,
        placeAmenities: true,
        placeSpace: true,
        placeType: true,
        price: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Listing | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,

        listingCreatedBy: {
          select: {
            id: true,
          },
        },

        locationData: true,
        locationType: true,
        mapData: true,
        photos: true,
        placeAmenities: true,
        placeSpace: true,
        placeType: true,
        price: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() data: ListingUpdateInput
  ): Promise<Listing | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          listingCreatedBy: data.listingCreatedBy
            ? {
                connect: data.listingCreatedBy,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          id: true,

          listingCreatedBy: {
            select: {
              id: true,
            },
          },

          locationData: true,
          locationType: true,
          mapData: true,
          photos: true,
          placeAmenities: true,
          placeSpace: true,
          placeType: true,
          price: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Listing | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,

          listingCreatedBy: {
            select: {
              id: true,
            },
          },

          locationData: true,
          locationType: true,
          mapData: true,
          photos: true,
          placeAmenities: true,
          placeSpace: true,
          placeType: true,
          price: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/trips")
  @ApiNestedQuery(TripFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "read",
    possession: "any",
  })
  async findManyTrips(
    @common.Req() request: Request,
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Trip[]> {
    const query = plainToClass(TripFindManyArgs, request.query);
    const results = await this.service.findTrips(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        tripinfo: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/trips")
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async connectTrips(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: TripWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trips: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/trips")
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async updateTrips(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: TripWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trips: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/trips")
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async disconnectTrips(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: TripWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trips: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/whislists")
  @ApiNestedQuery(WhislistFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Whislist",
    action: "read",
    possession: "any",
  })
  async findManyWhislists(
    @common.Req() request: Request,
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Whislist[]> {
    const query = plainToClass(WhislistFindManyArgs, request.query);
    const results = await this.service.findWhislists(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/whislists")
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async connectWhislists(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: WhislistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      whislists: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/whislists")
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async updateWhislists(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: WhislistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      whislists: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/whislists")
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async disconnectWhislists(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: WhislistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      whislists: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
