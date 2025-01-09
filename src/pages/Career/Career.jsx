import React, { useState } from 'react';
import PresentationTemplate from '../Home/PresentationTemplate/PresentationTemplate';

const jobData = [
  {
    title: 'UI/UX Designer',
    skills: 'Figma, Adobe Xd',
    position: 1,
    experience: 'Minimum 2 years',
    requirements: [
      'The candidate must be from Bangladesh and must be willing to work onsite',
      'Strong understanding of design principles, typography, color theory, and layout techniques.',
      'Knowledge of usability and accessibility standards in design.',
      'Ability to create visually appealing and user-friendly interfaces for websites and mobile.',
      'Stay up-to-date with the latest UI/UX/Webpage Design trends.',
      'Ability to create wireframes, mockups, and prototypes.'
    ],
    qualifications: [
      'Minimum graduation in related fields',
      'UI/UX/Webpage Designer, with a focus on web and mobile applications.',
      'A strong portfolio showcasing your UI/UX/Webpage Design skills and projects.',
      'Excellent communication and collaboration skills.',
      'Ability to focus on meeting deadlines'
    ],
    benefits: [
      'Yearly two bonuses.',
      'Opportunity to work with a dynamic and innovative team.',
      'Long-term career growth and stability.',
      'Salary increments opportunity, considering the performance of services.'
    ],
  },
  {
    title: 'Creative Graphic Designer',
    skills: 'Adobe Illustrator, Adobe InDesign, Adobe Photoshop',
    position: 2,
    experience: 'Minimum 2 years',
    requirements: [
      'The candidate must be from Bangladesh and must be willing to work onsite',
      'Strong understanding of design principles, typography, color theory, and layout techniques.',
      'Knowledge of usability and accessibility standards in design.',
      'Ability to create visually appealing and user-friendly design following modern design trends.',
      'Stay up-to-date with the latest Graphics Design trends.',
      'Ability to create wireframes, mockups, and prototypes.'
    ],
    qualifications: [
      'Minimum graduation in related fields',
      'Creative Graphics Designer, with a focus on print and digital design.',
      'A strong portfolio showcasing your Creative Design skills and projects.',
      'Excellent communication and collaboration skills.',
      'Ability to focus on meeting deadlines'
    ],
    benefits: [
      'Yearly two bonuses.',
      'Opportunity to work with a dynamic and innovative team.',
      'Long-term career growth and stability.',
      'Salary increments opportunity, considering the performance of services.'
    ],
  },
  {
    title: 'Digital Marketing Specialist',
    skills: 'SEO, Digital Marketing, Customer Handling',
    position: 1,
    experience: 'Minimum 2 years',
    requirements: [
      'The candidate must be from Bangladesh and must be willing to work onsite',
      'Strong understanding of social media management, SEO and customer needs.',
      'Execute SEO campaigns (on-page and off-page) to improve search engine rankings and website traffic.',
      'Conduct keyword research, competitive analysis, and content optimization.',
      'Stay updated on the latest trends and best practices in digital marketing and SEO.',
      'Develop content calendars and schedules to ensure timely delivery of all social media content.'
    ],
    qualifications: [
      'Minimum graduation in related fields',
      'Expert Digital Marketer, with a focus on social media marketing, content marketing and SEO.',
      'A strong portfolio showcasing your Creative marketing skills and ideas.',
      'Excellent communication and collaboration skills.',
      'Ability to reach on right customers'
    ],
    benefits: [
      'Yearly two bonuses.',
      'Opportunity to work with a dynamic and innovative team.',
      'Long-term career growth and stability.',
      'Salary increments opportunity, considering the performance of services.'
    ],
  },
  {
    title: 'Presentation Designer',
    skills: 'Microsoft PowerPoint, Google Slides, Keynote, Canva',
    position: 1,
    experience: 'Minimum 2 years',
    requirements: [
      'The candidate must be from Bangladesh and must be willing to work onsite',
      'Strong understanding of design principles, typography, color theory, and layout techniques.',
      'Knowledge of usability and accessibility standards in design.',
      'Ability to create visually appealing and user-friendly design following modern design trends.',
      'Stay up-to-date with the latest Graphics Design trends.',
      'Ability to create creative design, and presentation design.'
    ],
    qualifications: [
      'Minimum graduation in related fields',
      'Creative Presentation Designer, with a focus on digital marketplaces like Graphicriver.net, and creativemarket.com ',
      'A strong portfolio showcasing your Creative Design skills and projects.',
      'Excellent communication and collaboration skills.',
      'Ability to focus on meeting deadlines'
    ],
    benefits: [
      'Yearly two bonuses.',
      'Opportunity to work with a dynamic and innovative team.',
      'Long-term career growth and stability.',
      'Salary increments opportunity, considering the performance of services.'
    ],
  },
];

const Career = () => {
  const [activeJob, setActiveJob] = useState(null);

  const toggleAccordion = (index) => {
    if (activeJob === index) {
      setActiveJob(null);
    } else {
      setActiveJob(index);
    }
  };

  return (
    <div className='bg-white mt-20'>
      <div className="container mx-auto overflow-x-hidden tablet:overflow-x-hidden font-raleway 3xl:-mt-24 2xl:-mt-24 desktop:-mt-24 laptop:-mt-60 tablet:-mt-60 -mt-44">
        <section className="ml-5 p-16 tablet:ml-14 w-[16rem] laptop:w-[53rem] tablet:w-[40rem] bg-[#F9F9F9] 3xl:p-40 2xl:p-32 2xl:pb-28 desktop:p-28 laptop:p-28 tablet:p-20 desktop:px-5 gap-5 grid 3xl:mb-40 2xl:mb-40 desktop:mb-40 3xl:w-[74.4rem] 3xl:ml-[14.5rem] 2xl:w-[63rem] 2xl:ml-[14.8rem] desktop:w-[67rem] tablet:mt-44 mt-20 desktop:ml-[5.7rem] laptop:ml-[6rem]">
          <img className='3xl:w-[16rem] 3xl:ml-[19rem] 2xl:w-[14rem] desktop:w-[12rem] laptop:w-[12rem] tablet:w-[12rem] tablet:ml-[9rem] desktop:ml-[25rem] laptop:ml-[13rem] 2xl:ml-[15rem] w-24 ml-3' src="/Logo_Prographr_Color.svg" alt="" />
        </section>
        <div className='hidden 3xl:block 2xl:block desktop:block laptop:block tablet:block'>
          <h1 className="flex items-center justify-center 3xl:text-3xl 2xl:text-2xl desktop:text-2xl mb-36 font-medium text-[#282A37] 3xl:-mt-16 2xl:-mt-16 desktop:-mt-16 laptop:mt-24 tablet:mt-20">
            Want to establish a stable<strong className="ml-2">career:</strong>&nbsp;
            <strong className="-ml-1">Opening Job</strong>
          </h1>
        </div>

        <div className='block 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden tablet:hidden mb-36'>
          <h1 className='text-[#282A37] font-medium text-sm ml-5 leading-loose mt-6 text-center'> Want to establish a stable career:
            Opening Job( Joining from January 2025 )</h1>
        </div>

        <div className='hidden 3xl:block 2xl:block desktop:block laptop:block tablet:block'>
          <div className="px-4 py-6 3xl:w-[76rem] 2xl:w-[62rem] desktop:w-[67rem] mx-auto -mt-20">
            <table className="min-w-full bg-white overflow-hidden">
              <thead>
                <tr className="bg-[#4864EC] text-white">
                  <th className="py-4 px-6 text-left font-semibold text-base">Job Title</th>
                  <th className="py-4 px-6 text-left font-semibold text-base">Software Skills</th>
                  <th className="py-4 px-6 text-left font-semibold text-base">Position</th>
                  <th className="py-4 px-6 text-left font-semibold text-base">Experience</th>
                  <th className="py-4 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {jobData.map((job, index) => (
                  <React.Fragment key={index}>
                    <tr className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'} `}>
                      <td className="py-4 px-6 text-base text-[#282A37] font-semibold">{job.title}</td>
                      <td className="py-4 px-6 text-base text-[#282A37]">{job.skills}</td>
                      <td className="py-4 px-6 text-base text-[#282A37]">{job.position}</td>
                      <td className="py-4 px-6 text-base text-[#282A37]">{job.experience}</td>
                      <td className="py-4 px-6 text-center flex items-center justify-end">
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=career@prographr.com"
                          target="_blank"
                          className="bg-white text-[#282A37] py-2 px-5 text-sm font-medium border border-[#d9d6d6]">
                          Drop CV
                        </a>

                        <button
                          onClick={() => toggleAccordion(index)}
                          className="text-[#282A37] text-[40px] ml-4">
                          {activeJob === index ? '-' : '+'}
                        </button>
                      </td>
                    </tr>
                    {activeJob === index && (
                      <tr className="bg-[#ffffff]">
                        <td colSpan="5" className="py-4 px-6">
                          <div className="grid grid-cols-3 gap-6">
                            <div className="space-y-4">
                              <h4 className="font-semibold text-sm text-[#282A37]">Requirements:</h4>
                              <ul className="list-disc ml-5 text-sm 3xl:w-72 2xl:w-72 desktop:w-72 laptop:w-72 tablet:w-48 text-[#282A37]">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="mb-4">{req}</li>
                                ))}
                              </ul>

                            </div>
                            <div className="space-y-4">
                              <h4 className="font-semibold text-sm text-[#282A37]">Qualifications:</h4>
                              <ul className="list-disc ml-5 text-sm 3xl:w-72 2xl:w-72 desktop:w-72 laptop:w-72 tablet:w-48 text-[#282A37]">
                                {job.qualifications.map((req, i) => (
                                  <li key={i} className="mb-4">{req}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="space-y-4">
                              <h4 className="font-semibold text-sm text-[#282A37]">Benefits:</h4>
                              <ul className="list-disc ml-5 text-sm 3xl:w-72 2xl:w-72 desktop:w-72 laptop:w-72 tablet:w-48 text-[#282A37]">
                                {job.benefits.map((benefit, i) => (
                                  <li key={i} className="mb-4">{benefit}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='block 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden tablet:hidden'>
          <div className="px-4 py-6 mx-auto -mt-28">
            <table className="w-full bg-white">
              {/* Hide table header on mobile */}
              <thead className="hidden">
                <tr className="bg-[#4864EC] text-white">
                  <th className="py-4 px-2 text-left font-semibold text-sm">Job Title</th>
                  <th className="py-4 px-2 text-left font-semibold text-sm">Skills</th>
                  <th className="py-4 px-2 text-left font-semibold text-sm">Position</th>
                  <th className="py-4 px-2 text-left font-semibold text-sm">Experience</th>
                  <th className="py-4 px-2"></th>
                </tr>
              </thead>
              <tbody>
                {jobData.map((job, index) => (
                  <React.Fragment key={index}>
                    {/* Each row becomes block in mobile view */}
                    <tr className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'} block`}>
                      {/* Job Title */}
                      <td className="block py-2 px-2 text-base font-semibold text-[#282A37]">
                        <strong>Job Title: </strong>{job.title}
                      </td>

                      {/* Skills */}
                      <td className="block py-2 px-2 text-base text-[#282A37]">
                        <strong>Skills: </strong>{job.skills}
                      </td>

                      {/* Position */}
                      <td className="block py-2 px-2 text-base text-[#282A37]">
                        <strong>Position: </strong>{job.position}
                      </td>

                      {/* Experience */}
                      <td className="block py-2 px-2 text-base text-[#282A37]">
                        <strong>Experience: </strong>{job.experience}
                      </td>

                      {/* CV and Accordion */}
                      <td className="py-4 px-2 flex items-center justify-start">
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=career@prographr.com"
                          target="_blank"
                          className="bg-white text-[#282A37] py-2 px-3 text-xs font-medium border border-[#d9d6d6]">
                          Drop CV
                        </a>
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="text-[#282A37] text-2xl ml-4">
                          {activeJob === index ? '-' : '+'}
                        </button>
                      </td>
                    </tr>

                    {/* Accordion Content */}
                    {activeJob === index && (
                      <tr className="bg-white block">
                        <td colSpan="5" className="py-4 px-2 block">
                          <div className="grid grid-cols-1 gap-4">
                            {/* Requirements */}
                            <div>
                              <h4 className="font-semibold text-sm text-[#282A37]">Requirements:</h4>
                              <ul className="list-disc ml-5 text-sm text-[#282A37]">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="mb-2">{req}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Qualifications */}
                            <div>
                              <h4 className="font-semibold text-sm text-[#282A37]">Qualifications:</h4>
                              <ul className="list-disc ml-5 text-sm text-[#282A37]">
                                {job.qualifications.map((req, i) => (
                                  <li key={i} className="mb-2">{req}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Benefits */}
                            <div>
                              <h4 className="font-semibold text-sm text-[#282A37]">Benefits:</h4>
                              <ul className="list-disc ml-5 text-sm text-[#282A37]">
                                {job.benefits.map((benefit, i) => (
                                  <li key={i} className="mb-2">{benefit}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <PresentationTemplate />
    </div>
  );
};

export default Career;