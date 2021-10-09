import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty()
  street: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  region: string;
  @ApiProperty()
  zipCode: number;
}
