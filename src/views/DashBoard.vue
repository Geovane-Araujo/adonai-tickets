<template>
  <div>
    <h3>DashBoard</h3>
    <hr class="my-4 text-info">
    <div class="row">
      <div class="col-xl-3 col-lg-6">
        <div class="card card-stats mb-4 mb-xl-0 card1">
          <div class="card-body">
            <div class="row">
              <div class="col ">
                <h6 class="card-title text-uppercase  mb-0">Total Atendimentos</h6>
                <span class="h2 font-weight-bold mb-0">350,89</span>
              </div>
              <div class="col-auto">
                <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                </div>
              </div>
            </div>
            <p class="mt-3 mb-0 text-muted text-sm">
              <span class="text-success mr-0 tp"><i class="fa fa-arrow-up"></i> 3.48%</span>
              <span class="text-nowrap tp">Relação periodo anterior</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6">
        <div class="card card-stats mb-4 mb-xl-0 card2">
          <div class="card-body">
            <div class="row">
              <div class="col ">
                <h6 class="card-title text-uppercase mb-0" style="color: #fff">Tickets Abertos</h6>
                <span class="h2 font-weight-bold mb-0">40</span>
              </div>
              <div class="col-auto">
                <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                </div>
              </div>
            </div>
            <p class="mt-3 mb-0 text-muted text-sm">
              <span class="text-success mr-0 tp"><i class="fa fa-arrow-up"></i> 10.48%</span>
              <span class="text-nowrap tp">Relação periodo anterior</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6">
        <div class="card card-stats mb-4 mb-xl-0 card3">
          <div class="card-body">
            <div class="row">
              <div class="col ">
                <h6 class="card-title text-uppercase mb-0">Tickets Concluidos</h6>
                <span class="h2 font-weight-bold mb-0">4</span>
              </div>
              <div class="col-auto">
                <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                </div>
              </div>
            </div>
            <p class="mt-3 mb-0 text-muted text-sm">
              <span class="text-danger mr-1 tp"><i class="fa fa-arrow-down"></i> 10%</span>
              <span class="text-nowrap tp">Relação periodo anterior</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6">
        <div class="card card-stats mb-4 mb-xl-0 card4">
          <div class="card-body">
            <div class="row">
              <div class="col ">
                <h6 class="card-title text-uppercase mb-0 ">Tempo Médio</h6>
                <span class="h2 font-weight-bold mb-0">850,36</span>
              </div>
              <div class="col-auto">
                <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                </div>
              </div>
            </div>
            <p class="mt-3 mb-0 text-sm">
              <span class="text-success mr-1"><i class="fa fa-arrow-up tp"></i> 30.28%</span>
              <span class="text-nowrap tp">Relação periodo anterior</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 10px" class="row">
      <div class="col-sm-4">
        <Card style="width: 25rem; margin-rigth: 10px">
          <template #title>
              Por Atendente
          </template>
          <template #content>
              <apexchart type="donut" :options="chartOptions" :series="series" ></apexchart>
          </template>
        </Card>
      </div>
      <div class="col-sm-4">
        <Card style="width: 25rem;">
          <template #title>
              Por Atendente
          </template>
          <template #content>
              <apexchart type="donut" :options="chartOptions" :series="series" ></apexchart>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import Card from 'primevue/card'
// referencias
// cores gradiente: https://gradients.cssgears.com/
export default {
  data () {
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          type: 'donut'
        },
        labels: ['Geovane', 'Edna', 'Pietra', ' Stefanny', 'lourdes'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    }
  },
  components: {
    apexchart: VueApexCharts,
    Card
  }
}
</script>

<style lang="scss" scoped>
.tp{
  font-size: 0.8em;
}
.card1{
  background:linear-gradient(135deg, #F36265 0%,#961276 100%);
  h6{
    color: white;
  }
  span{
    color: white;
  }
}
.card2{
  background:linear-gradient(135deg, #C56CD6 0%,#3425AF 100%);
  h6{
    color: white;
  }
  span{
    color: white;
  }
}
.card3{
  background:linear-gradient(135deg, #5b247a 0%,#1bcedf 100%);
  h6{
    color: white;
  }
  span{
    color: white;
  }
}
.card4{
  background:linear-gradient(135deg, #42e695 0%,#3bb2b8 100%);
  h6{
    color: white;
  }
  span{
    color: white;
  }
}
.card5{
  h6{
    color: white;
  }
  span{
    color: white;
  }
}

</style>
