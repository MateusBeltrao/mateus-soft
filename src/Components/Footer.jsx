import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="text-white lg:px-[12%] px-[8%] pt-16 flex justify-center items-center flex-col">
                <div className="border-b border-[#222] pb-8 w-full text-white px-4 md:px-0">
                    <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">

                        {/* Logo + descrição */}
                        <div className="flex-1">
                            <Link to='/' className="text-4xl font-bold logo font-bricolage">
                                Mateus <span className="text-[#43d6d2]">Soft</span>
                            </Link>

                            <p className="text-[#999] mb-6 md:w-[90%] w-full mt-2">
                                Assistência técnica especializada em celulares, formatação de computadores e venda de acessórios. 
                                Qualidade, confiança e preço justo.
                            </p>

                            {/* Redes sociais */}
                            <div className="flex gap-4">
                                <a href="#" className="border border-[#43d6d2] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#43d6d2] hover:text-black transition-colors duration-300">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="#" className="border border-[#43d6d2] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#43d6d2] hover:text-black transition-colors duration-300">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="#" className="border border-[#43d6d2] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#43d6d2] hover:text-black transition-colors duration-300">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                                <a href="#" className="border border-[#43d6d2] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#43d6d2] hover:text-black transition-colors duration-300">
                                    <i className="fa-brands fa-tiktok"></i>
                                </a>
                            </div>
                        </div>

                        {/* Links rápidos */}
                        <div className="flex-1">
                            <h4 className="text-2xl font-semibold font-bricolage mb-4">Links Rápidos</h4>
                            <ul className="space-y-2 text-[#999] footer-menu relative">
                                <li><Link to="/" className="hover:text-[#43d6d2] transition duration-300 font-bricolage">Início</Link></li>
                                <li><Link to="/Services" className="hover:text-[#43d6d2] transition duration-300 font-bricolage">Serviços</Link></li>
                                <li><Link to="/Produtos" className="hover:text-[#43d6d2] transition duration-300 font-bricolage">Produtos</Link></li>
                                <li><Link to="/Contact" className="hover:text-[#43d6d2] transition duration-300 font-bricolage">Contato</Link></li>
                            </ul>
                        </div>

                        {/* Contato */}
                        <div className="flex-1">
                            <h4 className="text-2xl font-semibold font-bricolage mb-4">Contato</h4>

                            <p className="text-[#999] mb-2 text-sm">
                                📱 WhatsApp: (91) 98507-2644
                            </p>

                            <p className="text-[#999] mb-2 text-sm">
                                📍 Belém - PA
                            </p>

                            <p className="text-[#999] mb-4 text-sm">
                                🛠️ Conserto de celulares, PCs e acessórios
                            </p>

                            <button className="bg-[#e8021f] text-white px-6 py-3 rounded-full font-medium hover:bg-black transition-colors duration-300">
                                Falar no WhatsApp <i className="ri-whatsapp-line"></i>
                            </button>
                        </div>

                    </div>
                </div>

                {/* Rodapé final */}
                <div className="text-[#999] text-center text-base relative py-6">
                    <p className='font-bricolage'>
                        ©️ 2025 Mateus Soft - Todos os direitos reservados
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer