import { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


const TemplateDetails = () => {
    const [selectedTemplate, setSelectedTemplate] = useState('templateCustom');
    const [showAdditionalImages, setShowAdditionalImages] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const handleTemplateChange = (template) => {
        setSelectedTemplate(template);
    };

    const handleAddToCart = () => {

        if (user && user.email) {
            //send cart item to the database        

            const cartItem = {
                tempId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }
                })

        }

        else {
            Swal.fire({
                title: "You are not Signed In",
                text: "Please signin to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Sign In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/sign-in', { state: { from: location } })
                }
            });
        }
    }
    const temp = useLoaderData();

    const { name, _id, price, image } = temp;
    return (


        <div className="lg:ml-20 mb-16">
            <div className="layout mt-14 grid grid-cols-1 lg:grid-cols-7 gap-6 ml-2">
                <div className="col-span-4">
                    <h2 className="text-2xl text-[#2F1C6A] pb-5 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium">Premium <strong> Graphics Template</strong></h2>
                    <div className="">
                        <div className="bg-[#EDEEF7] rounded-xl flex items-center justify-center pt-6 pb-4 pl-4 pr-8">
                            <div className="flex items-center justify-between gap-12 my-8 -mx-20">
                                <img src={image} className="max-h-[400px] object-contain ml-8 -mr-4 " alt="" />
                                <img src={image} className="max-h-[400px] object-contain -ml-4 mr-4 " alt="" />
                            </div>
                        </div>
                        <div className="w-full mt-6 flex flex-wrap gap-4 ml-2 lg:ml-0">
                            <img src="https://i.ibb.co/6FCc4gG/1.jpg" className="w-[80px] h-[100px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]" alt="" />
                            <img src="https://i.ibb.co/pWZ7pqJ/10.jpg" className="w-[80px] h-[100px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]" alt="" />
                            <img src="https://i.ibb.co/vXmfTXW/2.jpg" className="w-[80px] h-[100px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]" alt="" />
                            <img src="https://i.ibb.co/Dr8pMnb/4.jpg" className="w-[80px] h-[100px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]" alt="" />
                            <img src="https://i.ibb.co/J2GbtNj/5.jpg" className="w-[80px] h-[100px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]" alt="" />
                            <img src="https://i.ibb.co/RbBk3rt/7.jpg" className="w-[80px] h-[100px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]" alt="" />

                           

                         {/* Toggle additional images */}
{!showAdditionalImages && (
    <div
        className={`w-[50px] h-[50px] flex items-center justify-center bg-[#EDEEF7] rounded-full cursor-pointer hover:bg-[#7666E3] mt-6 ml-5`}
        onClick={() => setShowAdditionalImages(true)}
    >
        <FontAwesomeIcon icon={faChevronRight} size="1x" />
    </div>
)}

{/* Additional images */}
{showAdditionalImages && (
    <>
        <div className="flex gap-4 mt-4 ml-2 lg:ml-0">
            <img
                src="https://i.ibb.co/44VVbr3/11.jpg"
                className="w-[80px] h-[100px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]"
                alt=""
            />
            <img
                src="https://i.ibb.co/JrbZzVc/9.jpg"
                className="w-[80px] h-[100px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]"
                alt=""
            />
            {/* Add more images here if needed */}
        </div>
        {/* Google button */}
        <div
            className={`w-[50px] h-[50px] flex items-center justify-center bg-[#EDEEF7] rounded-full cursor-pointer hover:bg-[#7666E3] mt-6 ml-5`}
            onClick={() => setShowAdditionalImages(false)}
        >
            <FontAwesomeIcon icon={faChevronRight} size="1x" style={{ transform: "rotate(180deg)" }} />
        </div>
    </>
                            )}
                        </div>
                    </div>
                    <h3 className="mt-10 text-xl ml-1 lg:ml-0 font-bold font-['__gellix_0bf537, __gellix_Fallback_0bf537']">Descriptions</h3>
                    <p className="mt-4 ml-1 lg:ml-0 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium">A business flyer is a versatile and </p>
                    <p className="mt-4 ml-1 lg:ml-0 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium">A business flyer is a versatile and dynamic promotional tool designed to communicate essential information about a business, its products, services, events, or special offers. This tangible piece of marketing collateral is strategically crafted to capture attention, engage the target audience, and generate interest in what the business has to offer</p>
                    <h3 className="mt-10 text-xl ml-2 lg:ml-0 font-bold font-['__gellix_0bf537, __gellix_Fallback_0bf537']">Features</h3>
                    <ul className="list-disc ml-2 lg:ml-0 pl-5 py-4 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium">
                        <li>US Letter &amp; A4 Paper Size </li>
                        <li>CMYK color mode</li>
                        <li>Bleed size 3 mm </li>
                        <li>300 DPI Print-ready</li>
                        <li>Photos are not included</li>
                    </ul>
                    <h3 className="mt-10 ml-2 lg:ml-0 text-xl font-bold font-['__gellix_0bf537, __gellix_Fallback_0bf537']">Files Included</h3>
                    <div className="text-3xl flex gap-2 my-3 ml-2 lg:ml-0 ">
                        <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"></path>
                        </svg>
                        <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1
.48-.44 1.48-.14 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"></path>
                        </svg>
                    </div>

                    <div className="mt-14">
                        <div className={`border ${selectedTemplate === 'templateCustom' ? 'border-primary' : 'border-gray-400'} rounded-[20px] p-8 mx-2 lg:mx-0 cursor-pointer`} onClick={() => handleTemplateChange('templateCustom')}>
                            <div className="flex justify-between pb-3 ">
                                <div className="flex gap-3 font-bold">
                                    <input className="radio radio-primary" type="radio" checked={selectedTemplate === 'templateCustom'} />
                                    <h2 className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] ">Template + Custom</h2>
                                </div>
                                <div className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium ">$20.00</div>
                            </div>
                            <div className="pt-2 border-t font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium ">We are about pushing boundaries, exploring possibilities, and ultimately delivering designs</div>


                            {/* Add to Cart button */}
                            <button className="bg-[#2F1C6A] text-white font-semibold px-4 py-2 rounded-lg mt-4 hover:bg-[#241E2F]">Add to Cart</button>

                        </div>
                        <div className={`border ${selectedTemplate === 'template' ? 'border-primary' : 'border-gray-400'} rounded-[20px] mt-6 p-8 mx-2 lg:mx-0 cursor-pointer`} onClick={() => handleTemplateChange('template')}>
                            <div className="flex justify-between pb-3">
                                <div className="flex gap-3 font-bold">
                                    <input className="radio radio-primary" type="radio" checked={selectedTemplate === 'template'} />
                                    <h2 className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] ">Template</h2>
                                </div>
                                <div className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium ">${price}</div>
                            </div>
                            <div className="pt-2 border-t font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium  ">We are about pushing boundaries, exploring possibilities, and ultimately delivering designs</div>

                            {/* Add to Cart button */}
                            <button onClick={handleAddToCart} className="bg-[#2F1C6A] text-white font-semibold px-4 py-2 rounded-lg mt-4 hover:bg-[#241E2F]">Add to Cart</button>

                        </div>

                    </div>


                </div>
                <div className="col-span-3 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium -mb-4 lg:-mb-
0 ">
                    <h1>Payment Options</h1>
                    <p className="text-sm mt-2 font-normal">Choose the payment method that suits you best.</p>
                    <div className="mt-4 flex flex-col space-y-4">
                        <div className="flex items-center">
                            <input type="radio" id="credit_card" name="payment_method" value="credit_card" className="rounded border-gray-300 text-primary focus:ring-primary" />
                            <label htmlFor="credit_card" className="ml-2 text-gray-700">Credit Card</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" id="paypal" name="payment_method" value="paypal" className="rounded border-gray-300 text-primary focus:ring-primary" />
                            <label htmlFor="paypal" className="ml-2 text-gray-700">Paypal</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" id="stripe" name="payment_method" value="stripe" className="rounded border-gray-300 text-primary focus:ring-primary" />
                            <label htmlFor="stripe" className="ml-2 text-gray-700">Stripe</label>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-80">Proceed to Payment</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default TemplateDetails;
