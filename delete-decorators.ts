import { applyDecorators, Delete, HttpCode } from '@nestjs/common';
import { ApiNoContentResponse, ApiParam } from '@nestjs/swagger';

export function SetDeleteDecorators(recordName = 'record') {
  return applyDecorators(
    Delete(':uuid'),
    ApiParam({
      type: 'string',
      name: 'uuid',
      example: 'b0d02f77-c7f5-4f82-8c19-999b2f7f29be'
    }),
    HttpCode(204),
    ApiNoContentResponse({
      description: `Deleted ${recordName} successfully.`
    })
  );
}
