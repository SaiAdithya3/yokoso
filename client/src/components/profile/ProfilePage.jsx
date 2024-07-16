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
    <div className="flex flex-col w-full items-start">
      <div className="w-full sticky top-0 pt-6 bg-white/50 backdrop-blur-sm rounded-2xl border-gray-300">
        <div className="w-full ">
          {loc === 'p' && (
            <h1 className="text-xl px-2 font-semibold">Student Profile</h1>
          )}
          {loc === 'f' && (
            <h1 className="text-xl px-2 font-semibold">Faculty Profile</h1>
          )}
          {loc === 'a' && (
            <h1 className="text-xl px-2 font-semibold">Admin Profile</h1>
          )}
          <ul className="mt-4 flex gap-4 w-full border-b">
            {options.map((option) => (
              <li
                key={option.key}
                onClick={() => handleSelect(option.key)}
                className={`cursor-pointer  py-2 ${selected === option.key ? 'text-black border-b-2 font-semibold border-black px-3 bg-white' : 'hover:bg-zinc-200 transition-all hover:text-black rounded-t-xl px-3'}`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      </div>
    </div>
  );
};

export default ProfilePage;
