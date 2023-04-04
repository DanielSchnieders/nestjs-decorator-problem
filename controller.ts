@SetDeleteDecorators('token')
async deleteTokenByUuid(@Param() { uuid }: UUIDQueryDto): Promise<void> {
	return this.tokenService.deleteTokenByUuid(uuid);
}