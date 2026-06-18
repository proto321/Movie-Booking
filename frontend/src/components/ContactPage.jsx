import React, { useState } from 'react'
import { contactStyles } from '../assets/dummyStyles'
import { ToastContainer } from 'react-toastify';
import { ContactIcon, Mail, MapPin, MessageCircle, Phone, Popcorn, Send, Ticket } from 'lucide-react';

const ContactPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Only allow digits for phone and limit to 10 chars
        if (name === 'phone') {
            const digits = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({ ...prev, phone: digits }));
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate phone is exactly 10 digits
        if (!formData.phone || formData.phone.length !== 10) {
            toast.error('⚠️ Please enter a valid 10-digit phone number.');
            console.warn('Submit blocked - invalid phone:', formData.phone);
            return;
        }

        // Format the message for WhatsApp
        const whatsappMessage = `Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone)}%0ASubject: ${encodeURIComponent(formData.subject)}%0AMessage: ${encodeURIComponent(formData.message)}`;

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/8299431275?text=${whatsappMessage}`, '_blank');

        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };



    return (

        <div className={contactStyles.pageContainer}>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className={contactStyles.bgGradient}></div>
            <div className={contactStyles.bgBlob1}></div>
            <div className={contactStyles.bgBlob2}></div>

            {/* Film strip effect */}
            <div className={contactStyles.filmStripTop}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={contactStyles.filmStripSegment}></div>
                ))}
            </div>
            <div className={contactStyles.filmStripBottom}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={contactStyles.filmStripSegment}></div>
                ))}
            </div>

            <div className={contactStyles.contentContainer}>
                <div className={contactStyles.headerContainer}>
                    <div className=" inline-flex items-center justify-center mb-4">
                        <h1 className={contactStyles.headerTitle}>
                            <span className={contactStyles.headerTitleRed}>Contact</span>
                            <span className={contactStyles.headerTitleWhite}>Us</span>
                        </h1>
                    </div>

                    <p>
                        Any questions about movie bookings or special eventts ?
                        Contact our team.
                    </p>
                </div>

                <div className={contactStyles.gridContainer}>
                    <div className={contactStyles.cardRelative}>
                        <div className={contactStyles.cardGradient} />
                        <div className={contactStyles.cardContainer}>
                            <div className={contactStyles.cardBadge}>
                                <Ticket className={contactStyles.cardIcon} />
                                BOOKING SUPPORT
                            </div>

                            <h2 className={contactStyles.formTitle}>
                                <MessageCircle className={contactStyles.formTitleIcon} />
                                Send us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className={contactStyles.form}>
                                <div className={contactStyles.formGrid}>
                                    <div>
                                        <label htmlFor="name" className={contactStyles.inputGroup}>
                                            Full Name
                                            <span className='text-red-500'> *</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={contactStyles.input}
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className={contactStyles.inputGroup}>
                                            Email Address
                                            <span className='text-red-500'> *</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={contactStyles.input}
                                            placeholder="your@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className={contactStyles.inputGroup}>
                                        Phone Number
                                        <span className='text-red-500'> *</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        inputMode='numeric'
                                        pattern='[0-9]{10}'
                                        maxLength={10}
                                        className={contactStyles.input}
                                        placeholder="Enter phone number"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className={contactStyles.inputGroup}>
                                        Subject
                                        <span className='text-red-500'> *</span>

                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className={contactStyles.select}
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="Ticket Booking">Ticket Booking</option>
                                        <option value="Group Events">Group Events</option>
                                        <option value="Membership">Membership Inquiry</option>
                                        <option value="Technical Issue">Technical Issue</option>
                                        <option value="Refund">Refund Request</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <label htmlFor="message" className={contactStyles.inputGroup}>
                                    Message
                                    <span className='text-red-500'> *</span>
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className={contactStyles.textarea}
                                    placeholder='Please describe your inquiry in details...'
                                ></textarea>


                                <button type='submit' className={contactStyles.submitButton}>
                                    Send via WhatsApp
                                    <Send className={contactStyles.buttonIcon} />
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <div className={contactStyles.cardRelative}>
                            <div className={contactStyles.cardGradient}></div>
                            <div className={contactStyles.cardContainer}>
                                <div className={contactStyles.cardBadge}>
                                    <Popcorn className={contactStyles.cardIcon} />
                                    CINEMA INFO
                                </div>
                                <h2 className={contactStyles.formTitle}>Contact Info</h2>

                                <div className={contactStyles.contactInfo}>
                                    <div className={contactStyles.contactItem}>
                                        <div className={contactStyles.contactIconContainer}>
                                            <phone className={contactStyles.contactIcon} />
                                        </div>
                                        <div>
                                            <h3 className={contactStyles.contactText}>
                                                Booking Hotline
                                            </h3>
                                            <p>
                                                +91 8349742282
                                            </p>
                                        </div>
                                    </div>

                                    <div className={contactStyles.contactItem}>
                                        <div className={contactStyles.contactIconContainer}>
                                            <Mail className={contactStyles.contactIcon} />
                                        </div>
                                        <div>
                                            <h3 className={contactStyles.contactText}>
                                                Email Address
                                            </h3>
                                            <p className={contactStyles.contactDetail}>
                                                booking@gmail.com
                                            </p>
                                            <p className={contactStyles.contactDetail}>
                                                support@gmail.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className={contactStyles.contactItem}>
                                        <div className={contactStyles.contactIconContainer}>
                                            <MapPin className={contactStyles.contactIcon} />
                                        </div>
                                        <div>
                                            <h3 className={contactStyles.contactText}>
                                                Main Theater Location
                                            </h3>
                                            <p className={contactStyles.contactDetail}>
                                                Miraz Cinema Civic Center, Bhilai, C.G
                                            </p>
                                            <p className={contactStyles.contactDetail}>
                                                +2 other location accross city
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Support Card */}
                        <div className={contactStyles.cardRelative}>
                            <div className={contactStyles.emergencyCardGradient}></div>
                            <div className={contactStyles.emergencyCard}>
                                <h3 className={contactStyles.emergencyTitle}>
                                    <Phone className={contactStyles.emergencyIcon} />
                                    Urgent Show-Related Issues
                                </h3>
                                <p className={contactStyles.emergencyText}>
                                    For urgent issues during a movie screening (sound, projection, etc.)
                                </p>
                                <div className="flex items-center">
                                    <div className={contactStyles.emergencyHotline}>
                                        HOTLINE: +91 8299431275
                                    </div>
                                    <span className={contactStyles.emergencyNote}>Available during showtimes</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage