import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class NivelService {
  constructor(private prisma: PrismaService) {}

  async getNivelesWhereSomeVacuna(idPersona: number) {
    return this.prisma.lda_nivel.findMany({
      where: {
        flag_activo: true,
        flag_eliminado: false,
        lda_nivel_educador: {
          some: {
            iden_persona: {
              equals: idPersona,
            },
          },
        },
        lda_nivel_menor: {
          some: {
            lda_menor: {
              flag_activo: true,
              flag_eliminado: false,
              lda_vacuna_menor: {
                some: {
                  lda_vacuna: {
                    nmro_agno: {
                      equals: new Date().getFullYear(),
                    },
                  },
                },
              },
            },
          },
        },
      },
      select: {
        iden_nivel: true,
        desc_nombre: true,
        _count: {
          select: {
            lda_nivel_menor: {
              where: {
                flag_activo: true,
                flag_eliminado: false,
              },
            },
          },
        },
      },
    });
  }

  async getAllNivelesWhereSomeVacuna() {
    return this.prisma.lda_nivel.findMany({
      where: {
        flag_activo: true,
        flag_eliminado: false,
        lda_nivel_menor: {
          some: {
            lda_menor: {
              flag_activo: true,
              flag_eliminado: false,
              lda_vacuna_menor: {
                some: {
                  lda_vacuna: {
                    nmro_agno: {
                      equals: new Date().getFullYear(),
                    },
                  },
                },
              },
            },
          },
        },
      },
      select: {
        iden_nivel: true,
        desc_nombre: true,
        _count: {
          select: {
            lda_nivel_menor: {
              where: {
                flag_activo: true,
                flag_eliminado: false,
              },
            },
          },
        },
      },
    });
  }

  async getMenoresByNivel(idPersona: number, idNivel: number) {
    return this.prisma.menor.findMany({
      where: {
        flag_activo: true,
        flag_eliminado: false,
        lda_vacuna_menor: {
          some: {
            lda_vacuna: {
              nmro_agno: {
                equals: new Date().getFullYear(),
              },
            },
          },
        },
        lda_nivel_menor: {
          some: {
            lda_nivel: {
              iden_nivel: {
                equals: idNivel,
              },
              lda_nivel_educador: {
                some: {
                  iden_persona: {
                    equals: idPersona,
                  },
                },
              },
            },
          },
        },
      },
      select: {
        id: true,
        per_persona: {
          select: {
            primerNombre: true,
            apellidoP: true,
            apellidoM: true,
          },
        },
        lda_vacuna_menor: {
          select: {
            flag_autorizado: true,
          },
        },
      },
    });
  }

  async getMenoresByNivelDirector(idNivel: number) {
    return this.prisma.menor.findMany({
      where: {
        flag_activo: true,
        flag_eliminado: false,
        lda_vacuna_menor: {
          some: {
            lda_vacuna: {
              nmro_agno: {
                equals: new Date().getFullYear(),
              },
            },
          },
        },
        lda_nivel_menor: {
          some: {
            lda_nivel: {
              iden_nivel: {
                equals: idNivel,
              },
            },
          },
        },
      },
      select: {
        id: true,
        per_persona: {
          select: {
            primerNombre: true,
            apellidoP: true,
            apellidoM: true,
          },
        },
        lda_vacuna_menor: {
          select: {
            flag_autorizado: true,
          },
        },
      },
    });
  }

  async getNivelesByEducador(idPersona: number) {
    return this.prisma.lda_nivel.findMany({
      where: {
        flag_activo: true,
        flag_eliminado: false,
        lda_nivel_educador: {
          some: {
            flag_activo: true,
            flag_eliminado: false,
            iden_persona: {
              equals: idPersona,
            },
            per_persona: {
              flag_activo: true,
              flag_eliminado: false,
              id: idPersona,
            },
          },
        },
      },
      select: {
        iden_nivel: true,
        desc_nombre: true,
      },
    });
  }

  async getAllNiveles() {
    return this.prisma.lda_nivel.findMany({
      where: {
        flag_activo: true,
        flag_eliminado: false,
      },
      select: {
        iden_nivel: true,
        desc_nombre: true,
      },
    });
  }
}
