// SPDX-FileCopyrightText: 2026 Аполлинария Аверченко
// SPDX-License-Identifier: MIT

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('hidden');
        }
    });
});