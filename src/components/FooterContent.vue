<template>
    <div class="text-muted py-1 shadow-sm">

        <h1>{{ $t('title.config') }}</h1>
    

        <div class="d-flex flex-column flex-md-row flex-lg-row justify-content-around align-items-center">
            <ul class="list-inline d-flex align-items-center p-0 m-0">
                <li class="list-inline-item">
                    <a href="#"><font-awesome-icon icon="fab fa-youtube text-secondary" class="h3"/></a>
                </li>
                <li class="list-inline-item px-3">
                    <a href="#"><font-awesome-icon icon="fab fa-twitter" class="h3"/></a>
                </li>
                <li class="list-inline-item px-1">
                    <a href="#"><font-awesome-icon icon="fab fa-facebook text-secondary" class="h3"/></a>
                </li>
            </ul>
            <div class="d-flex flex-column">
                <h5 class="h6 text-center text-success bold">المملكة العربية السعودية</h5>
                <h5 class="h6 text-center">مرحباً بكم في معسكر طويق في كورس تطبيقات واجهة الويب</h5>                
            </div>
            <div class="d-flex flex-column">
                <h5 class="w-100 h6 text-center text-muted bold">Developed by : ifmr4dev@gmail.com <i class="fas fa-envelope"></i></h5>
            </div>
        </div>
    </div>
</template>
<script setup>

import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from '../i18n';

const { locale } = useI18n({ useScope: 'global' });
watch(locale, (val) => {
  setI18nLanguage(val);
});

</script>
