import { Box, Flex, SimpleGrid, Text, theme, Button, Stack } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from "apexcharts";
import { ButtonComp } from "../components/ButtonComp";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Dashboard() {
  const barOptionsApex: ApexOptions = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      foreColor: theme.colors.gray[500]
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[500]
      },
      categories: [
        '2021-01-18T00:00:00.0000Z',
        '2021-01-18T00:00:00.0000Z',
        '2021-01-20T00:00:00.0000Z',
        '2021-01-21T00:00:00.0000Z',
        '2021-01-22T00:00:00.0000Z',
        '2021-01-23T00:00:00.0000Z',
        '2021-01-24T00:00:00.0000Z',
        '2021-01-24T00:00:00.0000Z',
      ]
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    }
  }

  const data = {
    Janeiro: {
      bar: [{ name: 'series1', data: [1000, 4003, 1002, 3551, 7000, 1338, 2234] }],
      barOptions: barOptionsApex,
      line: [
        {
          name: 'Backend',
          type: 'area',
          data: [44, 55, 31, 47, 31, 43, 26]
        }, {
          name: 'Frontend',
          type: 'line',
          data: [55, 33, 45, 10, 43, 54, 33]
        }
      ],
      lineOptions: {
        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          foreColor: theme.colors.gray[500]
        },
        grid: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          enabled: false
        },
        xaxis: {
          type: 'datetime',
          axisBorder: {
            color: theme.colors.gray[600]
          },
          axisTicks: {
            color: theme.colors.gray[500]
          },
          categories: [
            '2021-01-17T00:00:00.0000Z',
            '2021-01-18T00:00:00.0000Z',
            '2021-01-20T00:00:00.0000Z',
            '2021-01-21T00:00:00.0000Z',
            '2021-01-22T00:00:00.0000Z',
            '2021-01-23T00:00:00.0000Z',
            '2021-01-24T00:00:00.0000Z',
          ]
        },
        fill: {
          opacity: 0.3,
          type: 'gradient',
          gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
          }
        }
      },
      treemap: [
        {
          data: [
            {
              x: 'Mirage',
              y: 218
            },
            {
              x: 'Context API',
              y: 200
            },
            {
              x: 'Hook Form',
              y: 184
            },
            {
              x: 'Chakra UI',
              y: 300
            },
            {
              x: 'ApexOptions',
              y: 84
            },
            {
              x: 'Components',
              y: 10
            },
            {
              x: 'Chennai',
              y: 41
            },
            {
              x: 'Jaipur',
              y: 22
            },
            {
              x: 'Surat',
              y: 44
            },
            {
              x: 'Hyderabad',
              y: 68
            },
            {
              x: 'Lucknow',
              y: 28
            },
            {
              x: 'Indore',
              y: 19
            },
            {
              x: 'Kanpur',
              y: 29
            }
          ]
        }
      ],
      treemapOptions: {
        legend: {
          show: false
        },
        tooltip: {
          enabled: false
        },

        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          foreColor: theme.colors.gray[500]
        },

      },
      timeline: [
        {
          data: [
            {
              x: 'Codar',
              y: [
                new Date('2022-01-02').getTime(),
                new Date('2022-01-04').getTime()
              ]
            },
            {
              x: 'Testar',
              y: [
                new Date('2022-01-04').getTime(),
                new Date('2022-01-08').getTime()
              ]
            },
            {
              x: 'Arrumar bugs',
              y: [
                new Date('2022-01-08').getTime(),
                new Date('2022-01-12').getTime()
              ]
            },
            {
              x: 'Fazer deploy',
              y: [
                new Date('2022-01-12').getTime(),
                new Date('2022-01-18').getTime()
              ]
            }
          ]
        }
      ],
      timelineOptions: {
        legend: {
          show: false
        },
        tooltip: {
          enabled: false
        },

        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          foreColor: theme.colors.gray[500]
        },

        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          type: 'datetime'
        }
      }
    },
    Fevereiro: {
      bar: [{ name: 'series1', data: [131, 221, 1231, 13131, 2312, 3455, 3331] }],
      barOptions: barOptionsApex,
      line: [
        {
          name: 'Backend',
          type: 'area',
          data: [50, 70, 65, 44, 12, 16, 31]
        }, {
          name: 'Frontend',
          type: 'line',
          data: [33, 54, 32, 17, 18, 42, 65]
        }
      ],
      lineOptions: {
        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          foreColor: theme.colors.gray[500]
        },
        grid: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          enabled: false
        },
        xaxis: {
          type: 'datetime',
          axisBorder: {
            color: theme.colors.gray[600]
          },
          axisTicks: {
            color: theme.colors.gray[500]
          },
          categories: [
            '2021-02-01T00:00:00.0000Z',
            '2021-02-02T00:00:00.0000Z',
            '2021-02-03T00:00:00.0000Z',
            '2021-02-04T00:00:00.0000Z',
            '2021-02-05T00:00:00.0000Z',
            '2021-02-06T00:00:00.0000Z',
            '2021-02-07T00:00:00.0000Z',
          ]
        },
        fill: {
          opacity: 0.3,
          type: 'gradient',
          gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
          }
        }
      },
      treemap: [
        {
          data: [
            {
              x: 'Chakra UI',
              y: 280
            },
            {
              x: 'Context API',
              y: 220
            },
            {
              x: 'Hook Form',
              y: 170
            },

            {
              x: 'ApexOptions',
              y: 50
            },
            {
              x: 'Components',
              y: 80
            },
            {
              x: 'Mirage',
              y: 180
            },
            {
              x: 'Chennai',
              y: 13
            },
            {
              x: 'Jaipur',
              y: 53
            },
            {
              x: 'Surat',
              y: 13
            },
            {
              x: 'Hyderabad',
              y: 60
            },
            {
              x: 'Lucknow',
              y: 20
            },
            {
              x: 'Indore',
              y: 10
            },
            {
              x: 'Kanpur',
              y: 9
            }
          ]
        }
      ],
      treemapOptions: {
        legend: {
          show: false
        },
        tooltip: {
          enabled: false
        },

        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          foreColor: theme.colors.gray[500]
        },

      },
      timeline: [
        {
          data: [
            {
              x: 'Codar',
              y: [
                new Date('2022-02-02').getTime(),
                new Date('2022-02-06').getTime()
              ]
            },
            {
              x: 'Testar',
              y: [
                new Date('2022-02-06').getTime(),
                new Date('2022-02-08').getTime()
              ]
            },
            {
              x: 'Arrumar bugs',
              y: [
                new Date('2022-02-10').getTime(),
                new Date('2022-02-16').getTime()
              ]
            },
            {
              x: 'Fazer deploy',
              y: [
                new Date('2022-02-16').getTime(),
                new Date('2022-02-21').getTime()
              ]
            }
          ]
        }
      ],
      timelineOptions: {
        legend: {
          show: false
        },
        tooltip: {
          enabled: false
        },

        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          foreColor: theme.colors.gray[500]
        },

        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          type: 'datetime'
        }
      }
    },
    Março: {
      bar: [{ name: 'series1', data: [200, 180, 151, 450, 480, 250, 750] }],
      barOptions: barOptionsApex,
      line: [
        {
          name: 'Backend',
          type: 'area',
          data: [80, 90, 77, 56, 41, 12, 25]
        }, {
          name: 'Frontend',
          type: 'line',
          data: [50, 45, 18, 26, 61, 42, 47]
        }
      ],
      lineOptions: {
        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          foreColor: theme.colors.gray[500]
        },
        grid: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          enabled: false
        },
        xaxis: {
          type: 'datetime',
          axisBorder: {
            color: theme.colors.gray[600]
          },
          axisTicks: {
            color: theme.colors.gray[500]
          },
          categories: [
            '2021-03-07T00:00:00.0000Z',
            '2021-03-09T00:00:00.0000Z',
            '2021-03-12T00:00:00.0000Z',
            '2021-03-13T00:00:00.0000Z',
            '2021-03-14T00:00:00.0000Z',
            '2021-03-15T00:00:00.0000Z',
            '2021-03-16T00:00:00.0000Z',
          ]
        },
        fill: {
          opacity: 0.3,
          type: 'gradient',
          gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
          }
        }
      },
      treemap: [
        {
          data: [

            {
              x: 'Context API',
              y: 180
            },
            {
              x: 'Hook Form',
              y: 120
            },

            {
              x: 'ApexOptions',
              y: 270
            },
            {
              x: 'Chakra UI',
              y: 380
            },
            {
              x: 'Components',
              y: 280
            },
            {
              x: 'Mirage',
              y: 400
            },
            {
              x: 'Chennai',
              y: 29
            },
            {
              x: 'Jaipur',
              y: 43
            },
            {
              x: 'Surat',
              y: 31
            },
            {
              x: 'Hyderabad',
              y: 53
            },
            {
              x: 'Lucknow',
              y: 13
            },
            {
              x: 'Indore',
              y: 28
            },
            {
              x: 'Kanpur',
              y: 5
            }
          ]
        }
      ],
      treemapOptions: {
        legend: {
          show: false
        },
        tooltip: {
          enabled: false
        },

        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          foreColor: theme.colors.gray[500]
        },

      },
      timeline: [
        {
          data: [
            {
              x: 'Codar',
              y: [
                new Date('2022-03-01').getTime(),
                new Date('2022-03-09').getTime()
              ]
            },
            {
              x: 'Testar',
              y: [
                new Date('2022-03-09').getTime(),
                new Date('2022-03-12').getTime()
              ]
            },
            {
              x: 'Arrumar bugs',
              y: [
                new Date('2022-03-12').getTime(),
                new Date('2022-03-21').getTime()
              ]
            },
            {
              x: 'Fazer deploy',
              y: [
                new Date('2022-03-21').getTime(),
                new Date('2022-03-28').getTime()
              ]
            }
          ]
        }
      ],
      timelineOptions: {
        legend: {
          show: false
        },
        tooltip: {
          enabled: false
        },

        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          foreColor: theme.colors.gray[500]
        },

        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          type: 'datetime'
        }
      }
    }
  }

  const [state, setState] = useState(data.Janeiro);
  const [showChart, setShowChart] = useState(false);
  const [currentCompetencia, setCurrentCompetencia] = useState('Janeiro');

  function onCompetenciaChange(comp) {
    let newData = {
      bar: data[comp].bar,
      barOptions: data[comp].barOptions<ApexOptions>,
      line: data[comp].line,
      lineOptions: data[comp].lineOptions<ApexOptions>,
      treemap: data[comp].treemap,
      treemapOptions: data[comp].treemapOptions<ApexOptions>,
      timeline: data[comp].timeline,
      timelineOptions: data[comp].timelineOptions<ApexOptions>,
    }
    setState(newData);
    setCurrentCompetencia(comp)
  }

  setTimeout(() => {
    setShowChart(true);
  }, 1);

  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex justifyContent='flex-end' w='44%'>

        <Stack direction='row' spacing='2'>

          <ButtonComp competencia="Janeiro" currentCompetencia={currentCompetencia} onCompetenciaChange={onCompetenciaChange} />
          <ButtonComp competencia="Fevereiro" currentCompetencia={currentCompetencia} onCompetenciaChange={onCompetenciaChange} />
          <ButtonComp competencia="Março" currentCompetencia={currentCompetencia} onCompetenciaChange={onCompetenciaChange} />

        </Stack>
      </Flex>


      <Flex w='100%' my='6' maxWidth='1480' mx='auto' px='6'>
        <Sidebar />



        {showChart && (

          <>
            <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
              <Box
                p={['6', '8']}
                bg='gray.800'
                borderRadius='8'
                pb='4'
              >
                <Text fontSize='lg' mb='4'>Linhas escritas</Text>
                <Chart type='area' height='160' options={state.barOptions} series={state.bar} />
              </Box>

              <Box
                p={['6', '8']}
                bg='gray.800'
                borderRadius='8'
                pb='4'
              >
                <Text fontSize='lg' mb='4'>Tempo no projeto</Text>

                <Chart type='rangeBar' height='160' options={state.timelineOptions} series={state.timeline} />
              </Box>

            </SimpleGrid>

            <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
              <Box
                p={['6', '8']}
                bg='gray.800'
                borderRadius='8'
                pb='4'
              >
                <Text fontSize='lg' mb='4'>Bibliotecas utilizadas</Text>
                <Chart type='treemap' height='160' options={state.treemapOptions} series={state.treemap} />
              </Box>

              <Box
                p={['6', '8']}
                bg='gray.800'
                borderRadius='8'
                pb='4'
              >
                <Text fontSize='lg' mb='4'>Foco de desenvolvimento</Text>

                <Chart type='line' height='160' options={state.lineOptions} series={state.line} />
              </Box>

            </SimpleGrid>

          </>


        )}

      </Flex>
    </Flex >
  )
}