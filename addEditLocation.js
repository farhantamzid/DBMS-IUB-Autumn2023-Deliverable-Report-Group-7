function add(){
    var kichu=document.getElementById("naam");
    kichu.textContent="";
    kichu.innerHTML=`<label class="first">Enter location name:</label>
    <input class="emni" type="text">
    <label class="first">Enter location description:</label>
    <textarea id="tutu" cols="45" rows="10"></textarea>
    <button class="btn2">Submit</button>`;
}

function edit(){
    var kichu=document.getElementById("naam");
    kichu.textContent="";
    kichu.innerHTML=`<label class="first">Select location:</label>
    <select id="lala">
        <option value="Mirpur">Mirpur</option>
        <option value="Mohammadpur">Mohammadpur</option>
        <option value="Bashundhara">Bashundhara</option>
        <option value="Banani">Banani</option>
        <option value="Dhanmondi">Dhanmondi</option>
    </select>
    <button class="btn2">Select</button>
    <label class="first">Edit location description:</label>
    <textarea id="tutu" cols="45" rows="10"></textarea>
    <button class="btn2">Submit</button>`;
}
