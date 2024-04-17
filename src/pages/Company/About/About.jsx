import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            <div className="layout lg:mx-24 mx-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 lg:mt-20 mt-2">
                    <div className="flex items-center justify-center">
                        <iframe className="w-[300px] h-[150px] lg:w-[500px] lg:h-[300px] rounded-[25px]" src="https://www.youtube.com/embed/qfOo3vuvAb8?si=BxrOtvWRFsqcUVZ2"></iframe>
                    </div>
                    <div className="lg:mb-32">
                        <h3 className="lg:text-3xl text-2xl text-[#2F1C6A] font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] pt-5">About <strong>Prographr</strong></h3>
                        <p className="mt-10 text-slate-600 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium">Prographr is an online readymade graphic assets marketplace. A designer can upload their graphic assets and anyone can download any design which are premium and free. All the designs are also customizable. Customizable design have a fee. Which are negotiable with the asset owner.</p>
                    </div>
                </div>
                <section className="text-center mt-8 lg:pb-32 pb-14">
                    <h3 className="lg:text-3xl text-2xl text-[#2F1C6A] font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] pt-5">Team <strong>Members</strong></h3>
                    <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-8">
                        {/* Team Member 1: CEO */}
                        <div className="bg-white p-12 w-80 rounded-3xl shadow-lg">
                            <img src="https://i.ibb.co/vXhpcM3/pexels-justin-shaifer-1222271.jpg" alt="CEO" className=" w-32 h-32 rounded-full mx-auto mb-4" />
                            <div className="text-center">
                                <p className="font-semibold font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-lg mt-6">CEO & Founder</p>
                                <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537 font-medium my-1 text-slate-900 text-base">Mahmudul Hasan</p>
                                <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537 font-medium text-slate-600 text-base">Prographr</p>
                            </div>
                            {/* Social Icons */}
                            <div className="flex justify-center mt-6">
                                <a href="YOUR_FACEBOOK_URL" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-[#4267B2] text-2xl mx-2" /></a>
                                <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-[#0A66C2] text-2xl mx-2" /></a>
                                <a href="YOUR_INSTAGRAM_URL" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-[#C13584] text-2xl mx-2" /></a>
                            </div>
                        </div>

                        {/* Team Member 2: Graphic Designer */}
                        <div className="bg-white p-12 w-80 rounded-3xl shadow-lg">
                            <img src="https://i.ibb.co/VwgkRFw/pexels-italo-melo-2379004.jpg" alt="Graphic Designer" className="w-32 h-32 rounded-full mx-auto mb-4" />
                            <div className="text-center">
                                <p className="font-semibold font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-lg mt-6">Graphic Designer</p>
                                <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537 font-medium my-1 text-slate-900 text-base">Adnan Habib</p>
                                <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537 font-medium text-slate-600 text-base">Prographr</p>
                            </div>
                            {/* Social Icons */}
                            <div className="flex justify-center mt-6">
                                <a href="YOUR_FACEBOOK_URL" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-[#4267B2] text-2xl mx-2" /></a>
                                <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-[#0A66C2] text-2xl mx-2" /></a>
                                <a href="YOUR_INSTAGRAM_URL" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-[#C13584] text-2xl mx-2" /></a>
                            </div>
                        </div>

                        {/* Team Member 3: Web Developer */}
                        <div className="bg-white p-12 w-80 rounded-3xl shadow-lg">
                            <img src="https://i.ibb.co/Q9dq0vV/web-dev.png" alt="Web Developer" className="w-32 h-32 rounded-full mx-auto mb-4" />
                            <div className="text-center">
                                <p className="font-semibold font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-lg mt-6">Web Developer</p>
                                <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537 font-medium my-1 text-slate-900 text-base">Neaz Morshed</p>
                                <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537 font-medium text-slate-600 text-base">Prographr</p>
                            </div>
                            {/* Social Icons */}
                            <div className="flex justify-center mt-6">
                                <a href="https://www.facebook.com/profile.php?id=100008935244709" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-[#4267B2] text-2xl mx-2" /></a>
                                <a href="https://www.linkedin.com/in/neaz-morshed/?fbclid=IwZXh0bgNhZW0CMTAAAR2iuhLSGNmM_DxG1ImO3JQM9wCflb6HdPfUbGymjDptqSwW9nzoBsC1CFQ_aem_AXOS6lxo7CtKT3-ZvO403_-mg6ZlvFzl-kD8quh4R2DkwfY83bfjXXkcGVZeDUkVSzgpBnXBbx1KaTi1CsGU3VkC" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-[#0A66C2] text-2xl mx-2" /></a>
                                <a href="https://www.instagram.com/neazmorshednoman?fbclid=IwZXh0bgNhZW0CMTAAAR0ONvbFKgRLiYxjL3zJPXkv8J9_VONOAED8qjshnVZX08U0bvJZFdPZGto_aem_AXPUx51QcQN1pyO47GEzCO1OnHOrj_5Y7bbM97JavVZVns3cV8Im63VZ7fI5cRBu7nM3N8sWpGG2n8xsUFas_KY-" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-[#C13584] text-2xl mx-2" /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
