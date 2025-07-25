import React from 'react';

const TableRow = ({ label, value }) => (
  <tr className="even:bg-gray-50">
    <td className="font-medium w-1/3">{label}</td>
    <td>: {value || 'N/A'}</td>
  </tr>
);

const SectionTable = ({ title, rows }) => (
  <div className="bg-white shadow-md rounded-2xl p-4 mb-6">
    <h2 className="text-xl font-semibold text-gray-700 mb-3 border-b pb-1">{title}</h2>
    <table className="table-auto text-sm w-full">
      <tbody>{rows}</tbody>
    </table>
  </div>
);

const UserProfileDetails = ({ data }) => {
  const {
    family_information_id,
    personal_information_id,
    marriage_information_id,
    expected_partner_id,
  } = data;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Family Info */}
      <SectionTable
        title="পরিবারের তথ্য"
        rows={[
          <TableRow label="পিতার নাম" value={family_information_id?.fatherName} />,
          <TableRow label="পিতার পেশা" value={family_information_id?.fatherProfession} />,
          <TableRow label="মাতার নাম" value={family_information_id?.motherName} />,
          <TableRow label="মাতার পেশা" value={family_information_id?.motherProfession} />,
          <TableRow label="ভাইয়ের সংখ্যা" value={family_information_id?.brothersCount} />,
          <TableRow label="বোনের সংখ্যা" value={family_information_id?.sistersCount} />,
          <TableRow label="অর্থনৈতিক অবস্থা" value={family_information_id?.economicStatus} />,
          <TableRow label="ধর্মীয় পরিবেশ" value={family_information_id?.religiousEnvironment} />,
          <TableRow label="মায়ের ভাইয়ের তথ্য" value={family_information_id?.relativesInfo?.maternalUncles} />,
          <TableRow label="বাবার ভাইয়ের তথ্য" value={family_information_id?.relativesInfo?.paternalUncles} />,
        ]}
      />

      {/* Personal Info */}
      <SectionTable
        title="ব্যক্তিগত তথ্য"
        rows={[
          <TableRow label="ভোটার / জন্ম সনদ নম্বর" value={personal_information_id?.voterOrBirthRegistrationNo} />,
          <TableRow label="মোবাইল নম্বর" value={personal_information_id?.mobileNumber} />,
          <TableRow label="শখ" value={personal_information_id?.hobbies} />,
          <TableRow label="ধর্মীয় দৃষ্টিভঙ্গি" value={personal_information_id?.religiousView} />,
          <TableRow label="প্রতিবন্ধকতা" value={personal_information_id?.disabilityStatus} />,
          <TableRow label="দ্বিতীয় বিয়ের চিন্তা" value={personal_information_id?.secondMarriageThoughts} />,
          <TableRow label="আর্থিক উৎস" value={personal_information_id?.financialSource} />,
        ]}
      />

      {/* Marriage Info */}
      <SectionTable
        title="বিয়ের তথ্য"
        rows={[
          <TableRow label="অভিভাবকের সম্মতি" value={marriage_information_id?.guardianConsent} />,
          <TableRow label="বিয়ের পর কাজ" value={marriage_information_id?.jobAfterMarriage} />,
          <TableRow label="কাজের ইচ্ছা" value={marriage_information_id?.workPreference} />,
          <TableRow label="বিয়ের পর পড়াশোনা" value={marriage_information_id?.studyAfterMarriage} />,
          <TableRow label="স্টুডেন্ট মেনে নেওয়া" value={marriage_information_id?.acceptStudent} />,
          <TableRow label="আলাদা থাকার চিন্তা" value={marriage_information_id?.separateLiving} />,
          <TableRow label="বিয়ে সম্পর্কে ভাবনা" value={marriage_information_id?.thoughtsOnMarriage} />,
          <TableRow label="প্রত্যাশা" value={marriage_information_id?.expectationsFromOppositeSide} />,
          <TableRow label="বিয়ের কারণ" value={marriage_information_id?.reasonForMarriage} />,
          <TableRow label="পূর্ব সম্পর্ক" value={marriage_information_id?.pastRelationship} />,
          <TableRow label="পণ" value={marriage_information_id?.dowry} />,
        ]}
      />

      {/* Expected Partner Info */}
      <SectionTable
        title="প্রত্যাশিত জীবনসঙ্গী"
        rows={[
          <TableRow label="বয়স সীমা" value={expected_partner_id?.ageRange} />,
          <TableRow label="গাত্রবর্ণ" value={expected_partner_id?.skinTone} />,
          <TableRow label="উচ্চতা" value={expected_partner_id?.height} />,
          <TableRow label="শিক্ষাগত যোগ্যতা" value={expected_partner_id?.education} />,
          <TableRow label="জেলা" value={expected_partner_id?.district} />,
          <TableRow label="বৈবাহিক অবস্থা" value={expected_partner_id?.maritalStatus} />,
          <TableRow label="পেশা" value={expected_partner_id?.profession} />,
          <TableRow label="ধর্মাচরণ" value={expected_partner_id?.religiosity} />,
          <TableRow label="অর্থনৈতিক অবস্থা" value={expected_partner_id?.familyEconomicStatus} />,
          <TableRow label="প্রত্যাশিত গুণাবলি" value={expected_partner_id?.expectedQualities?.join(', ')} />,
        ]}
      />
    </div>
  );
};

export default UserProfileDetails;
