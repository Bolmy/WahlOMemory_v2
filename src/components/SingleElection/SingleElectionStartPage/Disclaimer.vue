<script>
import {isMobile} from "@/api/detectMobile.js";

export default {
  name: "Disclaimer",
  methods:{
    getMobileStyle(){
      if (isMobile()){
        return {}
      }
      return {
        "margin":"0 20%"
      }
    }
  }
}
</script>

<template>
<div class="DisclaimerText" :style=getMobileStyle()>
  Arbeit und Leben Thüringen ist parteipolitisch neutral und in der Werteorientierung seinem <a href="https://www.arbeitundleben-thueringen.de/arbeit-und-leben-mainmenu-91/unser-leitbild">Leitbild</a> verpflichtet. Die hier abgebildeten Positionen sind allein Meinungen der Parteien. Sie wurden durch Arbeit und Leben Thüringen redaktionell nicht bearbeitet<br>
  <br>
  Arbeit und Leben Thüringen leistet gemeinsam mit Teilnehmenden einen Beitrag für eine diskriminierungsfreie, friedliche und nachhaltige Gesellschaft.
</div>
</template>

<style scoped>
.DisclaimerText{
  text-align: left;
}
</style>