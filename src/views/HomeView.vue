<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div class="flex">
            <div class="mem">
              <img src="https://fakeimg.pl/200x200/00a" />
            </div>
            <div class="mem_info">
              <p class="name">super man</p>
              <p class="access">超級管理員</p>
            </div>
          </div>
          <div class="loginState">
            <p>上次登入時間<span class="r20"> 2000-12-12</span></p>
            <p>上次登入地點<span class="r20"> 地球</span></p>
          </div>
        </el-card>
        <el-card class="box-card2">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="名稱"> </el-table-column>
            <el-table-column prop="todayBuy" label="今日購買">
            </el-table-column>
            <el-table-column prop="monthBuy" label="整月購買">
            </el-table-column>
            <el-table-column prop="totalBuy" label="總購買"> </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <!-- 不知名的小卡片  -->
        <el-row :gutter="20">
          <el-col :span="8" v-for="e in countData" :key="e.name">
            <el-card
              :body-style="{
                display: 'flex',
                padding: 0,
                alignItems: 'center',
              }"
              class="miniCard"
            >
              <div class="iconBox" :style="{ background: e.color }">
                <i :class="`el-icon-${e.icon}`"></i>
              </div>
              <div class="text">
                <p class="value">${{ e.value }}</p>
                <p class="name">{{ e.name }}</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 折線圖 -->
        <el-card>
          <div ref="echarts1" style="height: 260px"></div>
        </el-card>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-card> <div ref="echarts2" style="height: 260px"></div> </el-card
          ></el-col>
          <el-col :span="12">
            <el-card> <div ref="echarts3" style="height: 260px"></div> </el-card
          ></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getData } from "@/api";
import * as echarts from "echarts";

export default {
  components: {},
  data() {
    return {
      tableData: [],
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getData().then(({ data }) => {
      this.tableData = data.data.tableData;
      // 折線圖
      const echarts1 = echarts.init(this.$refs.echarts1);
      // echarts data 處理
      const { orderData, userData, videoData } = data.data;
      const xAsisData = Object.keys(orderData.data[0]);
      console.log(userData);
      const seriesData = [];
      xAsisData.forEach((i) => {
        seriesData.push({
          name: i,
          type: "line",
          data: orderData.data.map((e) => e[i]),
        });
      });
      // 指定图表的配置项和数据
      var option1 = {
        title: {
          text: "銷售量",
        },
        tooltip: {},
        legend: {
          data: xAsisData,
        },
        xAxis: {
          data: xAsisData,
        },
        yAxis: {},
        series: seriesData,
      };
      echarts1.setOption(option1);

      // 柱狀圖 用戶
      const echarts2 = echarts.init(this.$refs.echarts2);
      const option2 = {
        title: {
          text: "用戶量",
        },
        legend: {
          data: ["新用戶", "活躍用戶"],
        },
        xAxis: {
          data: userData.map((i) => i.date),
        },
        yAxis: {},
        series: [
          {
            name: "新用戶",
            type: "bar",
            data: userData.map((i) => i.new),
          },
          {
            name: "活躍用戶",

            type: "bar",
            data: userData.map((i) => i.active),
          },
        ],
      };
      echarts2.setOption(option2);

      //圓餅圖 銷售量
      const echarts3 = echarts.init(this.$refs.echarts3);
      const option3 = {
        title: {
          text: "銷售占比",
        },
        series: [
          {
            type: "pie",
            radius: "50%",
            data: videoData,
          },
        ],
      };
      echarts3.setOption(option3);
    });
  },
};
</script>

<style scoped lang="scss">
.box-card {
  margin-bottom: 20px;
  .flex {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #909399;
  }

  .mem {
    width: 40%;
    padding: 0 10px 0 0;
    img {
      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: contain;
      border-radius: 50%;
    }
  }
  .mem_info {
    .name {
      font-size: 24px;
      font-weight: 600;
      padding: 0 0 10px;
    }
    .access {
      font-size: 18px;
    }
  }

  .loginState {
    font-size: 14px;
    color: #909399;

    .r20 {
      padding: 0 0 0 20px;
    }
  }
}
.flex {
  display: flex;
  align-items: center;
}
.el-card {
  margin-bottom: 20px;
  padding: 0 0;
}

.miniCard {
  .iconBox {
    width: 30%;
    aspect-ratio: 1 /1;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      color: #fff;
    }
  }
  .text {
    padding: 0 0 0 10px;
    .value {
      font-size: 24px;
      font-weight: 600;
    }
    .name {
      font-size: 14px;
      color: #909399;
    }
  }
}
</style>
