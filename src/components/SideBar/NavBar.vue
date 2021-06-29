<template>
  <div>
    <div data-component="navbar">
      <nav class="navbar p-0 fixed-top">
      <a class="navbar-brand px-1" href="#"><img src="icons.svg" class="d-inline-block mt-1" alt="AgentFire Logo" height="40"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#megamenu-dropdown" aria-controls="megamenu-dropdown" aria-expanded="false" aria-label="Toggle navigation">
          Integrei
        </button>
        <div>
          <div class="right-links float-right mr-4">
          <router-link v-show="side.home.show" :to="side.home.route" class="home"><i class="icons-nav fas fa-home mr-4"></i></router-link>
            <div class="d-inline dropdown rounded-0 mx-3">
              <router-link v-show="side.config.show" :to="side.config.route" class="dropdown-toggle" id="tools" data-toogle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icons-nav fas fa-wrench" aria-hidden="true"></i></router-link>
            </div>

            <div class="d-inline dropdown mr-3">
              <a v-show="side.alert.show" class="dropdown-toggle" id="notifications" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><span>{{ side.alert.msg.length }}</span><i class="icons-nav fas fa-bell"></i></a>
              <div class="dropdown-menu dropdown-menu-right rounded-0 pt-0" arua-labelledby="notifications">
                <div class="list-group">
                  <div class="lg">
                    <router-link :to="item.route" class="alert list-group-item list-group-item-action align-items-start colorstyle" v-for="item in side.alert.msg" :key="item.id">
                      <h5 class="mb-1">{{ item.title }}</h5>
                      <p class="mb-0">{{ item.body }}</p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-inline dropdown mr-3">
              <a v-show="side.mensagens.show" class="dropdown-toggle" id="messages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><i class="icons-nav fa fa-envelope"></i></a>
              <div class="dropdown-menu dropdown-menu-right rounded-0 text-center" aria-labelledby="messages">
                <a class="dropdown-item">Não há mensagens</a>
              </div>
            </div>

            <div class="d-inline dropdown">
              <a class="dropdown-toggle" id="messages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                <img src="http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g">
              </a>
              <div class="dropdown-menu dropdown-menu-right rounded-0" aria-labelledby="messages">
                <a class="dropdown-item" href="#">Perfil</a>
                <a class="dropdown-item" href="#">Sair</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="sidebar-menu-nav">
      <MenuBar :itens_menu="side.menu"/>
    </div>
    <div class="wp-content" id="content">
      <div class="container-fluid">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import MenuBar from './MenuBar.vue'
export default {
  props: {
    side: {
      type: Object,
      required: true
    }
  },
  components: {
    MenuBar
  }
}
</script>
<style lang="scss">
@import "side.scss";
</style>
