<template>
  <div id="cal">
    <h1>{{ msg }}</h1>
    <h2>永遠的17歲年齡計算器</h2>

    <p>您的生日:
      <input type="number" v-model="birth_yy" max="2020" min="1920" v-on:click="cal_real_dd()">年
      <input type="number" v-model="birth_mm" max="12" min="1" v-on:click="cal_real_dd()">月
      <input type="number" v-model="birth_dd" max="31" min="1" v-on:click="cal_real_dd()">日
    </p>
    
    <p>您的虛假年齡:{{fake_yy}}歲又{{fake_dd}}天</p>
    <p>您的真實年齡:17歲又{{real_dd}}天</p>

    <p>{{real_today}}</p>
    <button v-on:click="cal_real_dd()">Cal</button>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    msg: String,
  },
  data: function(){
    return {
      birth_yy: 2003,
      birth_mm: 9,
      birth_dd: 21,
      // fake_yy: '?',
      // fake_dd: '?',
      real_dd: '?'
    }
  },
  methods: {
    cal_real_dd: function() {
      let today = moment();
      let endday = moment((Number(this.birth_yy) + 17)+'-'+this.birth_mm+'-'+this.birth_dd);
      // if((Number(this.birth_mm)*100 + Number(this.birth_dd)*1) > (Number(moment().format('M'))*100+Number(moment().format('D')*1 ))){
      //   endday = moment((Number(this.birth_yy) + 17)+'-'+this.birth_mm+'-'+this.birth_dd);
      // }
      this.real_dd = Math.floor((today-endday)/86400000);
    }
  },
  computed: {
    jjj: function(){
        if((Number(this.birth_mm)*100 + Number(this.birth_dd)*1) > (Number(moment().format('M'))*100+Number(moment().format('D')*1 ))){
          return true
        } else {
          return false
        }
    },
    fake_yy: function () {
      let yy = 2020 - Number(this.birth_yy);
      if(this.jjj){
        yy = 2020 - Number(this.birth_yy) - 1;
      }
      return yy
    },
    fake_dd: function() {
      let today = moment();
      let endday = moment((Number(this.birth_yy)+this.fake_yy)+'-'+this.birth_mm+'-'+this.birth_dd);
      let dd = Math.floor((today-endday)/86400000);
      return dd;
    },
    real_today: function(){
      return (moment());
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input[type=number]{
  width: 50px;
}

</style>
