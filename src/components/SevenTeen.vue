<template>
  <div id="cal">
    <div class="bg">
      <div class="center-container">
        <h1>{{ msg }}</h1>
        <h2>找到您的真實年齡</h2>

        <!-- <h3>現在時間:{{real_age_today}}</h3> -->

        <p>您的生日:
          <input class="birth_yy" type="number" 
            v-model="birth_yy" 
            max="this_yy" 
            min="1920" 
            >年
          <input type="number" 
            v-model="birth_mm" 
            max="13" 
            min="0" 
            :click="recycle_mm()" 
            :keyup="recycle_mm()" 
            @wheel="recycle_mm()">月
          <input type="number" 
            v-model="birth_dd" 
            :max="max_of_dd + 1" 
            min="0" 
            :click="recycle_dd" 
            :keyup="recycle_dd()" 
            >日
          <!-- <input type="date" v-model="birth_day" max="2020-01-01" min="1900-01-01"> -->
          <!-- {{birth_day}} -->
        </p>
        
        <p class="fake_age">您的虛假年齡: 
          <span class="age_yy">{{fake_age_yy}}</span>歲又
          <span class="age_dd">{{fake_age_dd}}</span>天
        </p>
        <p class="real_age">您的真實年齡: 
          <span class="age_yy">17</span>歲又
          <span class="age_dd">{{real_age_dd}}</span>天
        </p>

      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    msg: String,
  },
  data: function(){
    let today = new Date();
    return {
      this_yy: today.getFullYear(),
      birth_yy: 1999,
      birth_mm: 1,
      birth_dd: 1,
      birth_day: "1987-01-01",
    }
  },
  methods: {
    recycle_mm: function() {
      if(this.birth_mm> 12){
        this.birth_mm = 1;
      } else if(this.birth_mm < 1){
        this.birth_mm = 12;        
      }
    },
    recycle_dd: function() {
      let mx = this.max_of_dd
      if(this.birth_dd > mx){
        this.birth_dd = 1;
      } else if(this.birth_dd < 1){
        this.birth_dd =mx;        
      }
    },
  
    
  },
  computed: {
    jjj: function(){
        if((Number(this.birth_mm)*100 + Number(this.birth_dd)*1) > (Number(moment().format('M'))*100+Number(moment().format('D')*1 ))){
          return true
        } else {
          return false
        }
    },
    max_of_dd: function(){
      
      let  DD = 31
      if(this.birth_mm == 2){
        DD = 28
      } else if ([4,6,9,11].includes(Number(this.birth_mm))){
        DD = 30
      }
      return DD
    },
    fake_age_yy: function () {
      let yy = this.this_yy - Number(this.birth_yy);
      if(this.jjj){
        yy = this.this_yy - Number(this.birth_yy) - 1;
      }
      return yy
    },
    fake_age_dd: function() {
      let today = moment();
      let endday = moment((Number(this.birth_yy)+this.fake_age_yy)+'-'+this.birth_mm+'-'+this.birth_dd);
      let dd = Math.floor((today-endday)/86400000);
      return dd;
    },
    real_age_dd: function() {
      let today = moment();
      let endday = moment((Number(this.birth_yy) + 17)+'-'+this.birth_mm+'-'+this.birth_dd);
      let dd = Math.floor((today-endday)/86400000);
      return dd;
    },
    real_age_today: function(){
      return (moment().format("YYYY年MM月DD日 HH:mm:ss"));
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.bg{
  background: #1A1A1A;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 0px;
  margin: 0px;

}
div.center-container{
  width: 500px;
  height: 500px;
  background: #1A1A1A;
  border: 5px solid #41B883;
  border-radius: 50%;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #FFF;
  h1{
    color: #fff;
    margin: 100px 0px 25px;

  }
  h2{
    color: #FFF;
    font-size: 18px;
    margin: 30px 0px 30px;

  }
  h3{
    color: #FFF;
    font-weight: 400;
    margin: 30px 0px 30px;
  }

  p{
    // text-align: left;
    // padding-left: 100px;
    &.fake_age{
      color: #a0a0a0;
    }
    span.age_yy,
    span.age_dd{
      font-size: 2em;
    }
  }

  input[type=number]{
    width: 50px;
    background: transparent;
    color: #FFF;
    border: none;
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid;
    padding-left: 15px;
    outline: none;

    &.birth_yy{
      width:75px;
    }
  }
}

</style>
