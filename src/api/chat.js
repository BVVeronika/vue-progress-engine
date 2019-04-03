// import AjaxTool from '@/store/utils/ajax_tool';

// import { API } from '@/api/path';

export const getConsultationList = () => {
  // TODO Demo date
  return new Promise((resolve, reject) => {
    resolve({
      date: 'Feb 22, 2017',
      list: [ // {array}
        { // {object}
          title: 'Chief Complains',
          abbr: 'CC',
          active: false
        },
        { // {object}
          title: 'History of Present Illness',
          abbr: 'HPI',
          active: true
        },
        { // {object}
          title: 'Physician Examination',
          abbr: 'PE',
          active: false
        },
        { // {object}
          title: 'Physician Examination',
          abbr: 'PMH',
          active: false
        },
        { // {object}
          title: 'Previous Surgical History',
          abbr: 'PSH',
          active: false
        },
        { // {object}
          abbr: 'MEDS',
          active: true
        },
        { // {object}
          title: 'Allergy',
          abbr: 'ALL',
          active: false
        },
        { // {object}
          title: 'Social History',
          abbr: 'SH',
          active: false
        },
        { // {object}
          title: 'Other Objective Findings',
          active: false
        },
        { // {object}
          title: 'Review of Previous Medical Records',
          active: false
        },
        { // {object}
          title: 'Assesment',
          active: false
        },
        { // {object}
          title: 'Plan',
          active: false
        },
        { // {object}
          title: 'Plan Detalis',
          active: false
        }
      ]
    });
  });
};
