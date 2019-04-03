import Vue from 'vue';
import Router from 'vue-router';
import Complaints from '@/views/Complaints';
import PreviousNotes from '@/views/PreviousNotes';
import Patient from '@/views/Patient';
import MedicalRecords from '@/views/MedicalRecords';
import Chat from '@/views/Chat';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/complains',
      name: 'complaints',
      component: Complaints
    },
    {
      path: '/previous-notes',
      name: 'previousNotes',
      component: PreviousNotes
    },
    {
      path: '/patient',
      name: 'patient',
      component: Patient
    },
    {
      path: '/medical-records',
      name: 'medicalRecords',
      component: MedicalRecords
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    // catch all redirect
    { path: '*', redirect: '/complains' }
  ]
});
