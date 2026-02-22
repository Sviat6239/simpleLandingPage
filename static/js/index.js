document.addEventListener('DOMContentLoaded', () => {

    const btn = document.getElementById('lang-toggle');
    const langFlag = document.getElementById('lang-flag');
    const langText = document.getElementById('lang-text');

    const ENG_FLAG = "https://commons.wikimedia.org/wiki/File:Flag_of_the_United_Kingdom_%283-5%29.svg";
    const POL_FLAG = "https://en.wikipedia.org/wiki/File:Flag_of_Poland.svg";

    let currentLang = document.documentElement.lang || 'en';

    const setFlagFor = (langToSwitchTo) => {
        if (langToSwitchTo === 'pl') {
            langFlag.src = POL_FLAG;
            langFlag.alt = 'Polski';
            langText.textContent = 'PL';
        } else {
            langFlag.src = ENG_FLAG;
            langFlag.alt = 'English';
            langText.textContent = 'EN';
        }
    };

    setFlagFor(currentLang === 'en' ? 'pl' : 'en');

    btn.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'pl' : 'en';

        document.querySelectorAll('[data-lang]').forEach(el => {
            const text = el.getAttribute(`data-lang-${newLang}`);
            if (text) el.textContent = text;
        });

        setFlagFor(currentLang);
        document.documentElement.lang = newLang;
        currentLang = newLang;
    });


    const html = document.querySelector('#html');
    const css = document.querySelector('#css');
    const js = document.querySelector('#js');
    const ts = document.querySelector('#ts');
    const quickjs = document.querySelector('#quickjs');
    const react = document.querySelector('#react');
    const svelte = document.querySelector('#svelte');
    const solidjs = document.querySelector('#solidjs');

    const django = document.querySelector('#django');
    const flask = document.querySelector('#flask');
    const falcon = document.querySelector('#falcon');

    const nodejs = document.querySelector('#nodejs');
    const bun = document.querySelector('#bun');
    const fastify = document.querySelector('#fastify');
    const express = document.querySelector('#express');
    const elysiajs = document.querySelector('#elysiajs');

    const c = document.querySelector('#c');
    const d = document.querySelector('#d');
    const cpp = document.querySelector('#cpp');
    const csharp = document.querySelector('#csharp');
    const lua = document.querySelector('#lua');
    const python = document.querySelector('#python');
    const nodejsGeneralDev = document.querySelector('#nodejs-generaldev');

    const fasm = document.querySelector('#fasm');
    const nasm = document.querySelector('#nasm');
    const tasm = document.querySelector('#tasm');
    const masm = document.querySelector('#masm');
    const rv32 = document.querySelector('#rv32');
    const i8080 = document.querySelector('#i8080');
    const z80 = document.querySelector('#z80');

    const linux = document.querySelector('#linux');
    const proxmox = document.querySelector('#proxmox');
    const windows = document.querySelector('#windows');
    const linuxServer = document.querySelector('#linuxserver');
    const windowsServer = document.querySelector('#windowsServer');
    const bash = document.querySelector('#bash');
    const powerShell = document.querySelector('#powershell');
    const git = document.querySelector('#git');
    const github = document.querySelector('#github');
    const vscode = document.querySelector('#vscode');

    const sqlite3 = document.querySelector('#sqlite3');
    const postgresql = document.querySelector('#postgresql');
    const sqlalchemy = document.querySelector('#sqlalchemy');
    const mongoose = document.querySelector('#mongoose');

    const english = document.querySelector('#english');
    const polish = document.querySelector('#polish');
    const ukrainian = document.querySelector('#ukrainian');
    const german = document.querySelector('#german');
    const russian = document.querySelector('#russian');


    html.innerHTML = 'HTML <span class="badge" id="advanced">Advansed</span>';
    css.innerHTML = 'CSS <span class="badge" id = "intermediate">Intermediate</span>';
    js.innerHTML = 'JS <span class="badge" id="intermediate">Intermediate</span>';
    ts.innerHTML = 'TS <span class="badge" id="elementary">Elementary</span>';
    quickjs.innerHTML = 'Quick.JS <span class="badge" id="begginer">Begginer</span>';
    react.innerHTML = 'React <span class="badge" id="begginer">Begginer</span>';
    svelte.innerHTML = 'Svelte <span class="badge" id="begginer">Begginer</span>';
    solidjs.innerHTML = 'Solid.JS <span class="badge" id="begginer">Begginer</span>';

    django.innerHTML = 'Django <span class="badge" id="intermediate">Intermediate</span>';
    flask.innerHTML = 'Flask <span class="badge" id="advanced">Adnaced</span>';
    falcon.innerHTML = 'Falcon <span class="badge" id="elementary">Elementary</span>';

    nodejs.innerHTML = 'Node.JS <span class="badge" id="elementary">Elementary</span>';
    bun.innerHTML = 'Bun <span class="badge" id="begginer">Begginer</span>';
    fastify.innerHTML = 'Fastify <span class="badge" id="elementary">Elementary</span>';
    express.innerHTML = 'Express <span class="badge" id="begginer">Begginer</span>';
    elysiajs.innerHTML = 'Elysiajs <span class="badge" id="elementary">Elementary</span>';

    c.innerHTML = 'C <span class="badge" id="basic">Basic</span>';
    d.innerHTML = 'D <span class="badge" id="elementary">Elementary</span>';
    cpp.innerHTML = 'C++ <span class="badge" id="elementary">Elementary</span>';
    csharp.innerHTML = 'C# <span class="badge" id="basic">Basic</span>';
    lua.innerHTML = 'Lua <span class="badge" id="elementary">Elementary</span>';
    python.innerHTML = 'Python <span class="badge" id="advanced">Advanced</span>';
    nodejsGeneralDev.innerHTML = 'Node.JS <span class="badge" id="intermediate">Inremediate</span>';

    fasm.innerHTML = 'FASM <span class="badge" id="elementary">Elementary</span>';
    nasm.innerHTML = 'NASM <span class="badge" id="elementary">Elementary</span>';
    tasm.innerHTML = 'TASM <span class="badge" id="begginer">Begginer</span>';
    masm.innerHTML = 'MASM <span class="badge" id="begginer">Begginer</span>';
    rv32.innerHTML = 'RV32 <span class="badge" id="begginer">Begginer</span>';
    i8080.innerHTML = 'I8080 <span class="badge" id="begginer">Begginer</span>';
    z80.innerHTML = 'Z80 <span class="badge" id="elementary">Elementary</span>';

    linux.innerHTML = 'Linux <span class="badge" id="intermediate">Intermediate</span>';
    proxmox.innerHTML = 'Linux <span class="badge" id="elementary">Elementary</span>';
    windows.innerHTML = 'Windows <span class="badge" id="intermediate">Intermediate</span>';
    linuxServer.innerHTML = 'Linux-Server <span class="badge" id="elementary">Elementary</span>';
    windowsServer.innerHTML = 'Windows-Server <span class="badge" id="begginer">Begginer</span>';
    bash.innerHTML = 'Bash <span class="badge" id="intermediate">Intermediate</span>';
    powerShell.innerHTML = 'PowerShell <span class="badge" id="basic">Basic</span>';

    git.innerHTML = 'Git <span class="badge" id="advanced">Advanced</span>';
    github.innerHTML = 'GitHub <span class="badge" id="advanced">Advanced</span>';
    vscode.innerHTML = 'VSCode <span class="badge" id="advanced">Advanced</span>';

    sqlite3.innerHTML = 'SQLite3 <span class="badge" id="intermediate">Intermediate</span>';
    postgresql.innerHTML = 'PostgreSQL <span class="badge" id="basic">Basic</span>';
    sqlalchemy.innerHTML = 'SQLAlchemy <span class="badge" id="basic">Basic</span>';
    mongoose.innerHTML = 'Mongoose <span class="badge" id="basic">Basic</span>';

    polish.innerHTML = 'Polish <span class="badge" id="b2">B2</span>';
    english.innerHTML = 'English <span class="badge" id="b2">B2</span>';
    ukrainian.innerHTML = 'Ukrainian <span class="badge" id="c2">C2</span>';
    german.innerHTML = 'German <span class="badge" id="a2">A2</span>';
    russian.innerHTML = 'russian <span class="badge" id="c2">C2</span>';


    const nativeLanguages = document.querySelector('.nativelanguages');
    const frontend = document.querySelector('.frontend');
    const backend = document.querySelector('.backend');
    const generaldev = document.querySelector('.generaldev');
    const lowlvldev = document.querySelector('.lowlvldev');
    const sysadmin = document.querySelector('.sysadmin');
    const databases = document.querySelector('.databases');

    const allBadges = document.querySelectorAll('.badge');

    allBadges.forEach(badge => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(-10px)';
        badge.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });

    const animateContainer = (container) => {
        if (!container) return;

        const badges = container.querySelectorAll('.badge');
        let timeouts = [];

        container.addEventListener('mouseenter', () => {
            timeouts = [];

            badges.forEach((badge, index) => {
                const timeout = setTimeout(() => {
                    badge.style.opacity = '1';
                    badge.style.transform = 'translateY(0)';
                }, index * 120);

                timeouts.push(timeout);
            });
        });

        container.addEventListener('mouseleave', () => {

            timeouts.forEach(timeout => clearTimeout(timeout));
            timeouts = [];

            badges.forEach(badge => {
                badge.style.opacity = '0';
                badge.style.transform = 'translateY(-10px)';
            });
        });
    };

    animateContainer(frontend);
    animateContainer(backend);
    animateContainer(generaldev);
    animateContainer(lowlvldev);
    animateContainer(sysadmin);
    animateContainer(databases);
    animateContainer(nativeLanguages);

})
