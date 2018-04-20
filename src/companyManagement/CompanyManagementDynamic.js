import React from 'react';
import dynamic from 'dva/dynamic';

const CompanyManagementDynamic = dynamic({
  app: window.app,
  models: () => [
    import('../../models/companyManagement/companyManagement'),
    import('../../models/companyManagement/memberPanel'),
    import('../../models/companyManagement/coStaffMgt'),
    import('../../models/companyManagement/posEditor'),
  ],
  component: () => import('./companyManagement'),
});

export default CompanyManagementDynamic;
