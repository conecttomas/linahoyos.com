<template>
    <header class="navbar fixed top-0 inset-x-0 z-40 bg-base-100 shadow-sm">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a href="#">Mi historia</a></li>
                    <li><a href="#">Como te puedo ayudar</a>
                        <ul>
                            <li><a href="#">Persona</a></li>
                            <li><a href="#">Empresa</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Conferencias</a></li>
                    <li><a href="#">Podcast</a></li>
                    <li><a href="#">Noticias y eventos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <a class="btn btn-ghost text-xl"><span>Lina Hoyos</span> <small class="text-xs">[{{ store.type }}]</small></a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li><a href="#">Mi historia</a></li>
                <li><a href="#">Mi propósito</a></li>
                <li>
                    <details>
                        <summary>Como te puedo ayudar</summary>
                        <ul class="p-2">
                            <!-- Personal -->
                            <client-only v-if="store.type === 'personal'">
                                <li><a href="#">Mentoría P.A.T.H.</a></li>
                                <li><a href="#">Programa de Autoliderazo Consciente</a></li>
                                <li><a href="#">Programa de Coaching 1:1</a></li>
                                <li><a href="#">Retiros</a></li>
                                <li><a href="#">Talleres</a></li>
                                <li>
                                <button class="btn btn-primary" @click.prevent="store.setType('business')">Eres empresa?</button>
                            </li>
                            </client-only>

                            <!-- Empresas -->
                            <client-only v-if="store.type === 'business'">
                                <li><a href="#">Mentoría B-PATH</a></li>
                                <li><a href="#">Cursos para Equipos</a></li>
                                <li><a href="#">Talleres de Estrategia y Liderazgo Consciente</a></li>
                                <li><a href="#">Bootcamp de Estrategia y Liderazgo</a></li>
                                <li><a href="#">Sesiones 1:1 Personalizadas</a></li>
                                <li><a href="#">Recursos Digitales</a></li>
                                <li><a href="#">Platagorma Tecnológica de Autogestión</a></li>
                                <li>
                                <button class="btn btn-primary" @click.prevent="store.setType('personal')">Eres persona?</button>
                            </li>
                            </client-only>
                        </ul>
                    </details>
                </li>
                <li><a href="#">Conferencias</a></li>
                <li><a href="#">Podcast</a></li>
                <li><a href="#">Noticias</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            <a class="btn">Contacto</a>
        </div>
    </header>
</template>

<script setup>
const store = useMainStore();
</script>