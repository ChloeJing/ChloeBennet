<template>
  <div class="content">
    <button class="BT" @click="getdata()">点击获取数据</button>
    <input type="buttom">
    <input type="buttom">
    <br>
    <button class="BT1">点击插入数据</button>
    <Table border :columns="columns5" :data="giftXueKeList">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">修改</Button>
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns5: [
        {
          title: "Id",
          type: "index",
          sortable: true
        },
        {
          title: "名称",
          key: "fName"
        },
        {
          title: "图片",
          key: "imgsrc",
          render: (h, params) => {
            return h("div", [
              h("img", {
                attrs: {
                  src: params.row.imgsrc
                },
                style: {
                  width: "40px",
                  height: "40px"
                }
              })
            ]);
          }
        },
        {
          title: "描述",
          key: "fDescription"
        },
        {
          title: "库存",
          key: "fSumNum",
          filters: [
            {
              label: "大于20",
              value: 1
            },
            {
              label: "大于20",
              value: 1
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.fSumNum > 20;
            } else if (value === 2) {
              return row.fSumNum < 20;
            }
          }
        },
        {
          title: "Action",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      giftXueKeList: [],
      data6: [
      ]
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data6[index].name}<br>Age：${
          this.data6[index].age
        }<br>Address：${this.data6[index].address}`
      });
    },
    getdata: function() {
      this.$ajax
        .get("https://www.myyd.xyz/baas/takeoutAdmin/cuisine/queryTakeout_food")
        .then(r => {
          if (r.status === 200) {
            console.log(r.data, "r.data.data");
            const { rows } = r.data;
            this.giftXueKeList =
              rows &&
              rows.length > 0 &&
              rows.map(m => {
                const imgsrc = `https://wxwaimai.oss-cn-huhehaote.aliyuncs.com/kyq/${
                  m.ownerID.value
                }/${m.storeFileName.value}`;
                return {
                  fName: m.fName.value,
                  fPrice: m.fPrice.value,
                  fDescription: m.fDescription.value,
                  fSumNum: m.fSumNum.value,
                  imgsrc
                };
              });
            console.log(this.giftXueKeList, "ddddd");
          }
        })
        .catch(function() {
          console.log("服务器异常");
        });
    },
    remove(index) {
      this.data6.splice(index, 1);
    }
  }
};
</script>
<style>
.BT {
  font-size: 20px;
  margin-left: 540px;
  background-color: black;
  color: white;
  border-radius: 10px;
  box-shadow: 3px 5px 5px slategray;
}
.BT1 {
  font-size: 18px;
  margin-left: 710px;
  background-color: black;
  color: white;
  border-radius: 10px;
  box-shadow: 3px 5px 5px slategray;
}
</style>
