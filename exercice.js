const mdp = document.getElementById('mdp').value;
const mdp2 = document.getElementById('mdp2').value;
const focusmdp2 = document.getElementById('mdp2');
const btn = document.getElementById('btn');

focusmdp2.addEventListener('mouseleave', () => {
    if(mdp === mdp2) {
        btn.classList.toggle('btn1');
    }
})