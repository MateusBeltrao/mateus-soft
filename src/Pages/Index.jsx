import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from "swiper/modules";

import about from '../assets/about.jpg';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


import carctg1 from '../assets/car-ctg-01.png'
import carctg2 from '../assets/car-ctg-02.png'
import carctg3 from '../assets/car-ctg-03.png'
import carctg4 from '../assets/car-ctg-04.png'

import tst1 from '../assets/test-1.jpg';
import tst2 from '../assets/test-2.jpg';
import tst3 from '../assets/test-3.jpg';
import tst4 from '../assets/test-4.jpg';

import blogdata from '../Blog.json'
import brand1 from '../assets/iphone.png'

import brand3 from '../assets/motorola.png'
import brand4 from '../assets/realme.png'
import brand5 from '../assets/oppo.png'
import brand2 from '../assets/samsung.png'
import brand6 from '../assets/xiaome.png'
import brand7 from '../assets/brand-07.webp'
import brand8 from '../assets/brand-08.webp'
import brand9 from '../assets/brand-09.webp'
import brand10 from '../assets/brand-10.webp'
import brand11 from '../assets/brand-11.webp'
import brand12 from '../assets/brand-12.webp'
import brand13 from '../assets/brand-13.webp'
import brand14 from '../assets/brand-14.webp'

import cardata from '../Cars.json'

import { Link } from 'react-router-dom';

function Index() {

    const [pickUpDate, setPickUpDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [carType, setCarType] = useState("");
    const [pickUpLocation, setPickUpLocation] = useState("");
    const [dropOffLocation, setDropOffLocation] = useState("");

    const datePickerRef = useRef(null);
    const returnPickerRef = useRef(null);

    const openCalendar = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setFocus();
        }
    };

    const openreturnCalendar = () => {
        if (returnPickerRef.current) {
            returnPickerRef.current.setFocus();
        }
    };

    const handleWhatsApp = () => {
        const phoneNumber = "5598507-2644"; // coloque seu número aqui
        const message = `🚗 *Nova solicitação de reserva:*
• Tipo de carro: ${carType || "Não selecionado"}
• Retirada: ${pickUpLocation || "Não informado"}
• Devolução: ${dropOffLocation || "Não informado"}
• Data de retirada: ${pickUpDate ? pickUpDate.toLocaleDateString("pt-BR") : "Não selecionada"}
• Data de devolução: ${returnDate ? returnDate.toLocaleDateString("pt-BR") : "Não selecionada"}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <>
            {/* Hero */}
            <div className="hero w-[100%] h-screen overflow-hidden">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{ delay: 3500 }}
                    speed={1500}
                    className="hero-swiper w-full h-full"
                >

                    {/* SLIDE 1 */}

                    <SwiperSlide>
                        <div className="hero-slide hero-slide1 w-full h-full flex items-center px-[12%]">

                            <div className="hero-content text-white lg:w-[60%]">

                                <span className="font-bricolage text-xs sm:text-sm uppercase tracking-widest bg-[#43d6d2] text-black px-2 py-1 rounded-sm">
                                    Assistência Técnica
                                </span>

                                <h1 className="font-bricolage text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-medium hero-title my-3">
                                    Manutenção de Celulares
                                </h1>

                                <p className="my-2 text-lg lg:text-2xl font-bricolage hero-subtitle text-gray-300">
                                    Conserto rápido e profissional para seu smartphone
                                </p>

                                <p className="my-5 xl:my-7 lg:w-[60%] hero-pere text-gray-300">
                                    Realizamos manutenção completa em celulares, diagnóstico rápido
                                    e reparos com qualidade para deixar seu aparelho funcionando
                                    como novo.
                                </p>

                                <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">

                                    <a
                                        href="https://wa.me/5591985072644"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >

                                        <button className="default-btn bg-[#43d6d2] text-black transition-all hover:bg-white hover:text-black py-3 px-5 lg:px-7 lg:py-5 font-bricolage rounded-full">
                                            Pedir orçamento
                                        </button>

                                    </a>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    {/* SLIDE 2 */}

                    <SwiperSlide>
                        <div className="hero-slide hero-slide2 w-full h-full flex items-center px-[12%]">

                            <div className="hero-content text-white lg:w-[60%]">

                                <span className="font-bricolage text-xs sm:text-sm uppercase tracking-widest bg-[#43d6d2] text-black px-2 py-1 rounded-sm">
                                    Serviços
                                </span>

                                <h1 className="font-bricolage text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-medium hero-title my-3">
                                    Formatação de Computadores
                                </h1>

                                <p className="my-2 text-lg lg:text-2xl font-bricolage hero-subtitle text-gray-300">
                                    Seu PC rápido e seguro novamente
                                </p>

                                <p className="my-5 xl:my-7 lg:w-[60%] hero-pere text-gray-300">
                                    Remoção de vírus, instalação de sistema e otimização
                                    completa para melhorar o desempenho do seu computador.
                                </p>

                                <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">

                                    <a
                                        href="https://wa.me/5591985072644"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >

                                        <button className="default-btn bg-[#43d6d2] text-black transition-all hover:bg-white hover:text-black py-3 px-5 lg:px-7 lg:py-5 font-bricolage rounded-full">
                                            Falar com técnico
                                        </button>

                                    </a>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    {/* SLIDE 3 */}

                    <SwiperSlide>
                        <div className="hero-slide hero-slide3 w-full h-full flex items-center px-[12%]">

                            <div className="hero-content text-white lg:w-[60%]">

                                <span className="font-bricolage text-xs sm:text-sm uppercase tracking-widest bg-[#43d6d2] text-black px-2 py-1 rounded-sm">
                                    Mateus Soft
                                </span>

                                <h1 className="font-bricolage text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-medium hero-title my-3">
                                    Acessórios e Xerox
                                </h1>

                                <p className="my-2 text-lg lg:text-2xl font-bricolage hero-subtitle text-gray-300">
                                    Capinhas, cabos, carregadores e serviços de impressão
                                </p>

                                <p className="my-5 xl:my-7 lg:w-[60%] hero-pere text-gray-300">
                                    Também trabalhamos com venda de acessórios para celular
                                    e serviços de xerox e impressão para facilitar seu dia a dia.
                                </p>

                                <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">

                                    <a
                                        href="https://wa.me/5591985072644"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >

                                        <button className="default-btn bg-[#43d6d2] text-black transition-all hover:bg-white hover:text-black py-3 px-5 lg:px-7 lg:py-5 font-bricolage rounded-full">
                                            Falar no WhatsApp
                                        </button>

                                    </a>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>



            {/* About */}
            <div className="about text-white lg:px-[10%] px-[8%] py-[50px] lg:py-[90px]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    <div className="relative w-auto sm:h-[450px] lg:h-[600px]">
                        <img
                            src={about}
                            alt="Assistência técnica Mateus Soft"
                            className="rounded-3xl w-full h-full object-contain md:object-cover"
                        />

                        <div className="curv bg-[#081f38]">
                            <div className="about-item-curv section-item-curv">
                                <i className="ri-tools-line text-xl"></i>
                            </div>
                        </div>
                    </div>

                    <div>

                        <p className="uppercase text-xs md:text-sm tracking-widest text-[#43d6d2] mb-2">
                            - Mateus Soft
                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold mb-3 font-bricolage">
                            Assistência Técnica em <br />
                            <span className="text-[#43d6d2] font-bricolage">
                                Celulares e Computadores
                            </span>
                        </h2>

                        <p className="text-gray-400 leading-relaxed my-6 text-sm lg:text-base">
                            A Mateus Soft oferece serviços especializados em manutenção de celulares,
                            formatação de computadores e venda de acessórios. Trabalhamos com diagnóstico
                            rápido, atendimento de qualidade e soluções confiáveis para manter seus
                            dispositivos funcionando perfeitamente.
                        </p>

                        <div className="space-y-4 mb-10">

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#43d6d2]">
                                    <i className="ri-check-double-line"></i>
                                </div>
                                <span className="text-white">Manutenção de Celulares</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#43d6d2]">
                                    <i className="ri-check-double-line"></i>
                                </div>
                                <span className="text-white">Formatação e Otimização de Computadores</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#43d6d2]">
                                    <i className="ri-check-double-line"></i>
                                </div>
                                <span className="text-white">Venda de Acessórios e Serviço de Xerox</span>
                            </div>

                        </div>

                        <a
                            href="https://wa.me/5591985072644"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <button className="bg-[#43d6d2] text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-white transition-colors duration-300">
                                Falar no WhatsApp <i className="ri-whatsapp-line"></i>
                            </button>

                        </a>

                    </div>
                </div>
            </div>

            {/* Banner */}
            <div className="banner lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
                <div className="banner-content text-center">

                    <p className="uppercase text-sm tracking-[5px] text-white mb-2">
                        - Atendimento Rápido
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage">
                        Conserto de Celulares e Computadores
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                        A Mateus Soft oferece manutenção de celulares, formatação de computadores,
                        venda de acessórios e serviços de impressão. Atendimento rápido e diagnóstico
                        confiável para seu aparelho.
                    </p>

                    <button
                        onClick={handleWhatsApp}
                        className="mt-8 bg-[#43d6d2] text-black px-8 py-4 rounded-full font-medium hover:bg-white transition-colors duration-300"
                    >
                        Solicitar Orçamento <i className="ri-whatsapp-line text-xl"></i>
                    </button>

                </div>
            </div>


            {/* Serviços */}
            <div className='car-categories lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]'>

                <div className="car-categories-content text-center mb-10 lg:mb-14">

                    <p className="uppercase text-sm tracking-[5px] mb-2 text-[#43d6d2]">
                        - Nossos Serviços
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage">
                        Soluções para Seus Dispositivos
                    </h2>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">


                    {/* Serviço 1 */}
                    <div className='bg-[#1e1e23] h-auto md:h-[350px] car-ctg-item relative flex justify-center items-center flex-col text-center p-6'>

                        <i className="ri-smartphone-line text-6xl text-[#43d6d2] mb-6"></i>

                        <h4 className='text-white text-2xl font-semibold font-bricolage pb-2'>
                            Manutenção de Celulares
                        </h4>

                        <span className='text-gray-400'>
                            Troca de tela, bateria, conector e reparos em geral.
                        </span>

                    </div>


                    {/* Serviço 2 */}
                    <div className='bg-[#1e1e23] h-auto md:h-[350px] car-ctg-item relative flex justify-center items-center flex-col text-center p-6'>

                        <i className="ri-computer-line text-6xl text-[#43d6d2] mb-6"></i>

                        <h4 className='text-white text-2xl font-semibold font-bricolage pb-2'>
                            Formatação de Computadores
                        </h4>

                        <span className='text-gray-400'>
                            Instalação de sistema, limpeza e otimização do PC.
                        </span>

                    </div>


                    {/* Serviço 3 */}
                    <div className='bg-[#1e1e23] h-auto md:h-[350px] car-ctg-item relative flex justify-center items-center flex-col text-center p-6'>

                        <i className="ri-headphone-line text-6xl text-[#43d6d2] mb-6"></i>

                        <h4 className='text-white text-2xl font-semibold font-bricolage pb-2'>
                            Venda de Acessórios
                        </h4>

                        <span className='text-gray-400'>
                            Capas, carregadores, cabos, fones e outros acessórios.
                        </span>

                    </div>


                    {/* Serviço 4 */}
                    <div className='bg-[#1e1e23] h-auto md:h-[350px] car-ctg-item relative flex justify-center items-center flex-col text-center p-6'>

                        <i className="ri-printer-line text-6xl text-[#43d6d2] mb-6"></i>

                        <h4 className='text-white text-2xl font-semibold font-bricolage pb-2'>
                            Xerox e Impressões
                        </h4>

                        <span className='text-gray-400'>
                            Impressão de documentos e cópias rápidas.
                        </span>

                    </div>


                </div>
            </div>


            {/* Brands */}
            <div className="bg-[#222222] w-full lg:px-[12%] px-[8%] py-[50px]">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={20}
                    loop={true}
                    autoplay={true}
                    className='brands-swiper flex justify-center items-center'
                    breakpoints={{
                        1399: {
                            slidesPerView: 6
                        },
                        767: {
                            slidesPerView: 4
                        },
                        575: {
                            slidesPerView: 2
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className='brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center'>
                            <img src={brand1} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center'>
                            <img src={brand2} alt="brand-image" className='w-full h-full object-contain md:object-cover ' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
                            <img
                                src={brand3}
                                alt="brand"
                                className="w-full h-full object-contain md:object-cover "
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center'>
                            <img src={brand4} alt="brand-image" className='w-full h-full object-contain md:object-cover ' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center'>
                            <img src={brand5} alt="brand-image" className='w-full h-full object-contain md:object-cover ' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center'>
                            <img src={brand6} alt="brand-image" className='w-full h-full object-contain md:object-cover ' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center'>
                            <img src={brand7} alt="brand-image" className='w-full h-full object-contain md:object-cover ' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center'>
                            <img src={brand8} alt="brand-image" className='w-full h-full object-contain md:object-cover ' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center'>
                            <img src={brand9} alt="brand-image" className='w-full h-full object-contain md:object-cover ' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center'>
                            <img src={brand10} alt="brand-image" className='w-full h-full object-contain md:object-cover ' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center'>
                            <img src={brand11} alt="brand-image" className='w-full h-full object-contain md:object-cover ' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center'>
                            <img src={brand12} alt="brand-image" className='w-full h-full object-contain md:object-cover ' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center'>
                            <img src={brand13} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center'>
                            <img src={brand14} alt="brand-image" className='w-full h-full object-contain md:object-cover ' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Serviços Extras */}
            <div className="our-service lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">

                <div className="our-service-content mb-20 text-center text-white">

                    <p className="uppercase text-sm tracking-[5px] text-[#43d6d2] mb-2">
                        - Serviços Extras
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-3 font-bricolage">
                        Outros Serviços
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Além da manutenção de celulares e computadores, também oferecemos
                        diversos serviços digitais para facilitar o seu dia a dia.
                    </p>

                </div>


                <div className="our-service-wrapper">

                    <div className='grid w-full gap-12 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>


                        {/* Cadastro Gov */}
                        <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full p-8">

                            <h5 className='font-semibold text-3xl mb-3 font-bricolage'>
                                Cadastro Gov.br
                            </h5>

                            <p className='text-[#999] text-lg'>
                                Criamos ou recuperamos sua conta Gov.br para acesso a serviços do governo.
                            </p>

                            <div className="curv">
                                <div className="service-item-curv section-item-curv">
                                    1
                                </div>
                            </div>

                        </div>


                        {/* Recuperação de Conta */}
                        <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full p-8">

                            <h5 className='font-semibold text-3xl mb-3 font-bricolage'>
                                Recuperação de Contas
                            </h5>

                            <p className='text-[#999] text-lg'>
                                Recuperamos contas de Google, Facebook, Instagram e outros serviços.
                            </p>

                            <div className="curv">
                                <div className="service-item-curv section-item-curv">
                                    2
                                </div>
                            </div>

                        </div>


                        {/* Remoção de Vírus */}
                        <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full p-8">

                            <h5 className='font-semibold text-3xl mb-3 font-bricolage'>
                                Remoção de Vírus
                            </h5>

                            <p className='text-[#999] text-lg'>
                                Limpamos vírus, aplicativos maliciosos e melhoramos o desempenho do aparelho.
                            </p>

                            <div className="curv">
                                <div className="service-item-curv section-item-curv">
                                    3
                                </div>
                            </div>

                        </div>


                        {/* Transferência de Dados */}
                        <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full p-8">

                            <h5 className='font-semibold text-3xl mb-3 font-bricolage'>
                                Transferência de Dados
                            </h5>

                            <p className='text-[#999] text-lg'>
                                Transferimos fotos, vídeos e contatos do celular antigo para o novo.
                            </p>

                            <div className="curv">
                                <div className="service-item-curv section-item-curv">
                                    4
                                </div>
                            </div>

                        </div>


                        {/* Instalação de Aplicativos */}
                        <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full p-8">

                            <h5 className='font-semibold text-3xl mb-3 font-bricolage'>
                                Instalação de Aplicativos
                            </h5>

                            <p className='text-[#999] text-lg'>
                                Instalamos e configuramos aplicativos essenciais no seu celular.
                            </p>

                            <div className="curv">
                                <div className="service-item-curv section-item-curv">
                                    5
                                </div>
                            </div>

                        </div>


                        {/* Configuração de Celular */}
                        <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full p-8">

                            <h5 className='font-semibold text-3xl mb-3 font-bricolage'>
                                Configuração de Celular
                            </h5>

                            <p className='text-[#999] text-lg'>
                                Configuramos celular novo com contas, aplicativos e ajustes.
                            </p>

                            <div className="curv">
                                <div className="service-item-curv section-item-curv">
                                    6
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

            </div>



            {/* car */}
            <div className='car lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]'>
                <div className="car-categories-content text-start mb-10 lg:mb-14">
                    <p className="uppercase text-sm tracking-[5px] mb-2 text-[#43d6d2]">
                        - Nossos Produtos
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage ">
                        Escolha o Produto Ideal
                    </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {cardata.map((car) => (
                        <div key={car.id} className="car-item group bg-[#1e1f22] relative w-full">

                            {/* IMAGEM (INTACTA) */}
                            <div className="car-image w-full relative h-[250px] overflow-hidden">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className='w-full h-full object-contain md:object-cover object-center group-hover:scale-110 transition-all duration-300'
                                />
                                <div className="car-info absolute bottom-0 p-5 left-0 z-10">
                                    <h4 className='text-2xl md:text-3xl font-bricolage text-white font-semibold'>
                                        {car.name}
                                    </h4>
                                    <span className='text-[#43d6d2] font-bricolage text-lg'>
                                        {car.category}
                                    </span>
                                </div>
                            </div>

                            {/* CONTEÚDO (SEM LISTA) */}
                            <div className="car-content p-5 py-8 relative">

                                <div className='flex justify-between items-center mt-2'>
                                    <h4 className='text-xl md:text-2xl font-bold font-bricolage text-white'>
                                        R$ {car.price}
                                    </h4>

                                    <Link to={`/car/${car.id}`}>
                                        <button className='text-white bg-[#e8021f] px-4 py-2 text-base md:text-lg rounded-full cursor-pointer hover:bg-white hover:text-black transition-all'>
                                            Ver
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials */}
            <div className="our-service lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
                <div className="our-service-content mb-20 text-center text-white">
                    <p className="uppercase text-sm tracking-[5px] text-[#43d6d2] mb-2">- Depoimentos</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage ">
                        Clientes que já <span className="text-[#43d6d2] font-bricolage"> confiaram no meu trabalho</span>
                    </h2>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                        1440: { slidesPerView: 3 },
                    }}
                >

                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div className="rounded-[30px] bg-[#222] text-left p-8 shadow-md h-full flex flex-col justify-between">
                            <div className="flex items-start justify-between mb-6">
                                <span className="text-4xl text-white mr-4 fa-solid fa-quote-left"></span>
                                <div className="flex space-x-1">
                                    {Array(5).fill().map((_, i) => (
                                        <span key={i} className="text-white text-xl fa-solid fa-star"></span>
                                    ))}
                                </div>
                            </div>

                            <div className="text-white text-lg mb-6 font-bricolage">
                                Troquei a tela do meu celular e ficou perfeita, parecia novo. Atendimento rápido e preço justo.
                            </div>

                            <div className="flex items-center mt-6">
                                <div className="curv">
                                    <div className="service-item-curv section-item-curv bg-transparent test-cruve">
                                        <img src={tst1} alt="Usuário" className="rounded-full mr-4" />
                                    </div>
                                </div>
                                <div className="ps-[100px]">
                                    <p className="font-semibold text-xl font-bricolage text-[#43d6d2]">Carlos M.</p>
                                    <p className="text-[#999] text-sm font-bricolage">Cliente</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div className="rounded-[30px] bg-[#222] text-left p-8 shadow-md h-full flex flex-col justify-between">
                            <div className="flex items-start justify-between mb-6">
                                <span className="text-4xl text-white mr-4 fa-solid fa-quote-left"></span>
                                <div className="flex space-x-1">
                                    {Array(5).fill().map((_, i) => (
                                        <span key={i} className="text-white text-xl fa-solid fa-star"></span>
                                    ))}
                                </div>
                            </div>

                            <div className="text-white text-lg mb-6 font-bricolage">
                                Comprei um fone Bluetooth e a qualidade é muito boa pelo preço. Recomendo demais.
                            </div>

                            <div className="flex items-center mt-6">
                                <div className="curv">
                                    <div className="service-item-curv section-item-curv bg-transparent test-cruve">
                                        <img src={tst2} alt="Usuário" className="rounded-full mr-4" />
                                    </div>
                                </div>
                                <div className="ps-[100px]">
                                    <p className="font-semibold text-xl font-bricolage text-[#43d6d2]">Ana S.</p>
                                    <p className="text-[#999] text-sm font-bricolage">Cliente</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
                        <div className="rounded-[30px] bg-[#222] text-left p-8 shadow-md h-full flex flex-col justify-between">
                            <div className="flex items-start justify-between mb-6">
                                <span className="text-4xl text-white mr-4 fa-solid fa-quote-left"></span>
                                <div className="flex space-x-1">
                                    {Array(5).fill().map((_, i) => (
                                        <span key={i} className="text-white text-xl fa-solid fa-star"></span>
                                    ))}
                                </div>
                            </div>

                            <div className="text-white text-lg mb-6 font-bricolage">
                                Formatei meu computador e ficou muito mais rápido. Serviço top e confiável.
                            </div>

                            <div className="flex items-center mt-6">
                                <div className="curv">
                                    <div className="service-item-curv section-item-curv bg-transparent test-cruve">
                                        <img src={tst3} alt="Usuário" className="rounded-full mr-4" />
                                    </div>
                                </div>
                                <div className="ps-[100px]">
                                    <p className="font-semibold text-xl font-bricolage text-[#43d6d2]">João P.</p>
                                    <p className="text-[#999] text-sm font-bricolage">Cliente</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 4 */}
                    <SwiperSlide>
                        <div className="rounded-[30px] bg-[#222] text-left p-8 shadow-md h-full flex flex-col justify-between">
                            <div className="flex items-start justify-between mb-6">
                                <span className="text-4xl text-white mr-4 fa-solid fa-quote-left"></span>
                                <div className="flex space-x-1">
                                    {Array(5).fill().map((_, i) => (
                                        <span key={i} className="text-white text-xl fa-solid fa-star"></span>
                                    ))}
                                </div>
                            </div>

                            <div className="text-white text-lg mb-6 font-bricolage">
                                Transferiu todos meus dados para outro celular sem perder nada. Muito prático!
                            </div>

                            <div className="flex items-center mt-6">
                                <div className="curv">
                                    <div className="service-item-curv section-item-curv bg-transparent test-cruve">
                                        <img src={tst4} alt="Usuário" className="rounded-full mr-4" />
                                    </div>
                                </div>
                                <div className="ps-[100px]">
                                    <p className="font-semibold text-xl font-bricolage text-[#43d6d2]">Mariana R.</p>
                                    <p className="text-[#999] text-sm font-bricolage">Cliente</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            {/* Dicas / Serviços */}
            <div className="our-blog lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
                <div className="our-blog-content mb-20 text-center text-white">
                    <p className="uppercase text-sm tracking-[5px] text-[#43d6d2] mb-2">
                        - Dicas e Serviços
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage ">
                        Cuidados e <span className="text-[#43d6d2] font-bricolage">Soluções</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {blogdata.slice(0, 3).map((blog) => (
                        <div key={blog.id} className="blog-item bg-[#1e1f22] group">

                            {/* IMAGEM (NÃO ALTEREI) */}
                            <div className="blog-image overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="group-hover:scale-110 transition-all duration-300 w-full h-[250px] object-cover"
                                />
                            </div>

                            <div className="blog-content p-5 py-8">

                                {/* TAG */}
                                <div className="bg-[#e8021f] w-fit px-4 py-1 text-sm text-white font-bricolage rounded-md mb-3">
                                    {blog.category}
                                </div>

                                {/* TÍTULO */}
                                <h4 className="text-lg lg:text-2xl font-bricolage text-white font-semibold">
                                    {blog.name}
                                </h4>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Index