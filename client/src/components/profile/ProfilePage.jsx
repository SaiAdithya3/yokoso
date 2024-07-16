import React, { lazy, Suspense, useState } from 'react';

// Lazy loading components
const GeneralDetails = lazy(() => import('./Options/General'));
const BankingInfo = lazy(() => import('./Options/Banking'));
const BatchDetails = lazy(() => import('./Options/BatchDetails'));
const AcademicInfo = lazy(() => import('./Options/AcademicInfo'));
const Qualifications = lazy(() => import('./Options/Qualifications'));
const Others = lazy(() => import('./Options/Others'));
import { useLocation } from 'react-router-dom';

const components = {
  GeneralDetails,
  BankingInfo,
  BatchDetails,
  AcademicInfo,
  Qualifications,
  Others,
};

const options = [
  { key: 'GeneralDetails', label: 'General Details' },
  { key: 'BankingInfo', label: 'Banking Info' },
  { key: 'BatchDetails', label: 'Batch Details' },
  { key: 'AcademicInfo', label: 'Academic Info' },
  { key: 'Qualifications', label: 'Qualifications' },
  { key: 'Others', label: 'Others' },
];

const ProfilePage = () => {
  const [selected, setSelected] = useState('GeneralDetails');
  const Component = components[selected];
  const location = useLocation();
  const loc = location.pathname.split('/')[1];

  const handleSelect = (key) => {
    setSelected(key);
  };

  return (
    <div className="flex w-full py-8 items-start">
      <div className="w-1/4 sticky top-7 border rounded-2xl border-gray-300">
        <div className="p-4">
          <h1 className="text-xl font-semibold">Student Profile</h1>
          <ul className="mt-4">
            {options.map((option) => (
              <li
                key={option.key}
                onClick={() => handleSelect(option.key)}
                className={`cursor-pointer my-1 py-2 ${selected === option.key ? 'text-black shadow border border-black/20 px-3 bg-white rounded-lg' : 'hover:bg-zinc-700 rounded-lg transition-all hover:text-white px-3'}`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-3/4 px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      </div>
    </div>
  );
};

export default ProfilePage;
