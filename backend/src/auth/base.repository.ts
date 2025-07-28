/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class BaseRepository<T> {
  constructor(protected prismaModel: any) {}

  async findAll() {
    return this.prismaModel.findMany({ where: { deletedAt: null } });
  }

  async softDelete(id: string) {
    return this.prismaModel.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
