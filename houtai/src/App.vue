<style scoped>
.Content {
  border: 1px solid #d7dde4;
  background: #4882bb;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.top {
  width: 2000px;
  background-color: #5b6270;
  height: 80px;
  font-size: 50px;
  line-height: 80px;
  text-align: center;
  color: white;
  font-weight: bold;
}
.bottom {
  width: 2000px;
  height: 895px;
  background-color: beige;
  display: flex;
  flex-direction: row;
}
.left {
  width: 200px;
  height: 895px;
}
.left_bigOne {
  width: 200px;
  height: 895px;
}
.left_one {
  height: 100px;
  width: 200px;
  font-size: 15px;
  color: white;
  line-height: 80px;
  text-align: center;
}
.right {
  width: 1720px;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
<template>
  <div class="Content">
    <div class="top">全球贸易大国商品金融管理系统</div>
    <div class="bottom">
      <div class="left">
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu
            active-name="1-2"
            theme="dark"
            width="auto"
            :class="menuitemClasses"
            class="left_bigOne"
          >
            <MenuItem name="1-1" class="left_one">
              <Icon type="ios-navigate"></Icon>
              <router-link to="/HelloWorld">China</router-link>
            </MenuItem>
            <MenuItem name="1-2" class="left_one">
              <Icon type="ios-search"></Icon>
              <router-link to="/DataBase">America</router-link>
            </MenuItem>
            <MenuItem name="1-3" class="left_one">
              <Icon type="ios-settings"></Icon>
              <router-link to="/zhuce">canada</router-link>
            </MenuItem>
            <MenuItem name="1-4" class="left_one">
              <Icon type="ios-settings"></Icon>
              <router-link to="/zhuce_2">Greenland</router-link>
            </MenuItem>
            <MenuItem name="1-5" class="left_one">
              <Icon type="ios-settings"></Icon>
              <router-link to="/zhuce_3">chloe
              </router-link>
            </MenuItem>
            <MenuItem name="1-6" class="left_one">
              <Icon type="ios-settings"></Icon>
              <span>Germany</span>
            </MenuItem>
          </Menu>
        </Sider>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>