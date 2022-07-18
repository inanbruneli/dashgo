import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

//bar
const bar = [
  { name: 'series1', data: [1000, 4003, 1002, 3551, 7000, 1338, 2234] }
]

const barOptions: ApexOptions = {
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
      '2021-03-18T00:00:00.0000Z',
      '2021-03-18T00:00:00.0000Z',
      '2021-03-20T00:00:00.0000Z',
      '2021-03-21T00:00:00.0000Z',
      '2021-03-22T00:00:00.0000Z',
      '2021-03-23T00:00:00.0000Z',
      '2021-03-24T00:00:00.0000Z',
      '2021-03-24T00:00:00.0000Z',
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
};

//line
const line = [
  {
    name: 'Backend',
    type: 'area',
    data: [44, 55, 31, 47, 31, 43, 26]
  }, {
    name: 'Frontend',
    type: 'line',
    data: [55, 33, 45, 10, 43, 54, 33]
  }
]

const lineOptions: ApexOptions = {
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
      '2021-03-18T00:00:00.0000Z',
      '2021-03-18T00:00:00.0000Z',
      '2021-03-20T00:00:00.0000Z',
      '2021-03-21T00:00:00.0000Z',
      '2021-03-22T00:00:00.0000Z',
      '2021-03-23T00:00:00.0000Z',
      '2021-03-24T00:00:00.0000Z',
      '2021-03-24T00:00:00.0000Z',
      '2021-03-23T00:00:00.0000Z',
      '2021-03-24T00:00:00.0000Z',
      '2021-03-24T00:00:00.0000Z',
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
};

//treemap
const treemap = [
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
]

const treemapOptions: ApexOptions = {

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


};

//timeline
const timeline = [
  {
    data: [
      {
        x: 'Codar',
        y: [
          new Date('2019-03-02').getTime(),
          new Date('2019-03-04').getTime()
        ]
      },
      {
        x: 'Testar',
        y: [
          new Date('2019-03-04').getTime(),
          new Date('2019-03-08').getTime()
        ]
      },
      {
        x: 'Arrumar bugs',
        y: [
          new Date('2019-03-08').getTime(),
          new Date('2019-03-12').getTime()
        ]
      },
      {
        x: 'Fazer deploy',
        y: [
          new Date('2019-03-12').getTime(),
          new Date('2019-03-18').getTime()
        ]
      }
    ]
  }
]

const timelineOptions: ApexOptions = {


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


};





export default function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  setTimeout(() => {
    setShowChart(true);
  }, 1);

  return (


    <Flex direction='column' h='100vh'>
      <Header />

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
                <Chart type='area' height='160' options={barOptions} series={bar} />
              </Box>

              <Box
                p={['6', '8']}
                bg='gray.800'
                borderRadius='8'
                pb='4'
              >
                <Text fontSize='lg' mb='4'>Tempo no projeto</Text>

                <Chart type='rangeBar' height='160' options={timelineOptions} series={timeline} />
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
                <Chart type='treemap' height='160' options={treemapOptions} series={treemap} />
              </Box>

              <Box
                p={['6', '8']}
                bg='gray.800'
                borderRadius='8'
                pb='4'
              >
                <Text fontSize='lg' mb='4'>Foco de desenvolvimento</Text>

                <Chart type='line' height='160' options={lineOptions} series={line} />
              </Box>

            </SimpleGrid>

          </>


        )}

      </Flex>
    </Flex >
  )
}