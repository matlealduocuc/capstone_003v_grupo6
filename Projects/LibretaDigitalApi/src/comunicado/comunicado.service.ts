import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ComunicadoService {
  constructor(private readonly prisma: PrismaService) {}

  // async getComunicadosByNivel(idNivel: number) {
  //   return await this.prisma.lda_comunicado.findMany({
  //     where: {
  //       lda_comunicado_entities: {
  //         every: {
  //           lda_educador: {
  //             iden_persona: idPersona,
  //           },
  //           flag_activo: true,
  //           flag_eliminado: false,
  //         },
  //       },
  //     },
  //   });
  // }

  async getTiposComunicado() {
    return await this.prisma.lda_tipo_comunicado.findMany();
  }

  async getComunicadosByMenor(idMenor: number, idApoderado: number) {
    return await this.prisma.lda_comunicado_menor.findMany({
      where: {
        flag_activo: true,
        lda_nivel: {
          flag_activo: true,
          flag_eliminado: false,
        },
        lda_comunicado: {
          flag_activo: true,
          flag_eliminado: false,
        },
        iden_menor: idMenor,
        lda_menor: {
          flag_activo: true,
          flag_eliminado: false,
          per_persona_lda_menor_iden_per_apoderadoToper_persona: {
            id: idApoderado,
            flag_activo: true,
            flag_eliminado: false,
          },
        },
      },
      select: {
        lda_comunicado: {
          select: {
            iden_comunicado: true,
            desc_titulo: true,
            fech_creacion: true,
            usr_usuario: {
              select: {
                persona: {
                  select: {
                    primerNombre: true,
                    apellidoP: true,
                    apellidoM: true,
                  },
                },
                usr_rol: {
                  select: {
                    desc_rol: true,
                  },
                },
              },
            },
          },
        },
        flag_confirmado: true,
        lda_nivel: {
          select: {
            desc_nombre: true,
          },
        },
      },
    });
  }

  async getComunicadoByMenorComunicado(
    idMenor: number,
    idComunicado: number,
    idApoderado: number,
  ) {
    return await this.prisma.lda_comunicado.findFirst({
      where: {
        iden_comunicado: idComunicado,
        flag_activo: true,
        flag_eliminado: false,
        lda_comunicado_menor: {
          some: {
            flag_activo: true,
            iden_comunicado: {
              equals: idComunicado,
            },
            lda_menor: {
              flag_activo: true,
              flag_eliminado: false,
              id: {
                equals: idMenor,
              },
              per_persona_lda_menor_iden_per_apoderadoToper_persona: {
                id: idApoderado,
                flag_activo: true,
                flag_eliminado: false,
              },
            },
          },
        },
      },
      select: {
        desc_titulo: true,
        desc_texto: true,
        fech_creacion: true,
        usr_usuario: {
          select: {
            usr_rol: {
              select: {
                desc_rol: true,
              },
            },
            persona: {
              select: {
                primerNombre: true,
                apellidoP: true,
                apellidoM: true,
              },
            },
          },
        },
        lda_comunicado_menor: {
          where: {
            iden_comunicado: idComunicado,
            flag_activo: true,
            lda_menor: {
              id: idMenor,
              flag_activo: true,
              flag_eliminado: false,
              per_persona_lda_menor_iden_per_apoderadoToper_persona: {
                id: idApoderado,
                flag_activo: true,
                flag_eliminado: false,
              },
            },
          },
          select: {
            flag_confirmado: true,
            lda_nivel: {
              select: {
                desc_nombre: true,
              },
            },
            lda_menor: {
              select: {
                per_persona: {
                  select: {
                    primerNombre: true,
                    apellidoP: true,
                    apellidoM: true,
                  },
                },
                lda_nivel_menor: {
                  where: {
                    flag_activo: true,
                    flag_eliminado: false,
                    lda_nivel: {
                      flag_activo: true,
                      flag_eliminado: false,
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async confirmaConocimientoComunicadoMenor(
    idMenor: number,
    idComunicado: number,
    idApoderado: number,
  ) {
    const isApoderado = await this.prisma.menor.findFirst({
      where: {
        id: idMenor,
        iden_per_apoderado: idApoderado,
        flag_activo: true,
        flag_eliminado: false,
        per_persona_lda_menor_iden_per_apoderadoToper_persona: {
          flag_activo: true,
          flag_eliminado: false,
        },
      },
    });
    if (!isApoderado) {
      return false;
    }
    const getIden = await this.prisma.lda_comunicado_menor.findFirst({
      where: {
        iden_menor: idMenor,
        iden_comunicado: idComunicado,
      },
      select: {
        iden_comunicado_menor: true,
      },
    });
    const updated = await this.prisma.lda_comunicado_menor.update({
      data: {
        flag_confirmado: true,
      },
      where: {
        iden_comunicado_menor: getIden.iden_comunicado_menor,
      },
    });
    return updated;
  }
}
