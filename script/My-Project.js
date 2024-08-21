let dataMyProject = [];

function submitData(event) {
    event.preventDefault();
    const projectName = document.getElementById("inputMyProject");
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
    const description = document.getElementById("inputContent");
    const technologies = document.querySelectorAll("input[type=checkbox]:checked");
    const image = document.getElementById("inputImage");

    if (projectName && startDate && endDate && description && technologies && image && image.files.length > 0) {
        const projectNameValue = projectName.value;
        const startDateValue = startDate.value;
        const endDateValue = endDate.value;
        const descriptionValue = description.value;
        const technologiesValue = Array.from(technologies).map((tech) => tech.value);
        const imageValue = image.files[0];

        if (imageValue) {
            const imageUrl = URL.createObjectURL(imageValue);

            const MyProject = {
                title: projectNameValue, 
                content: descriptionValue,
                technologies: technologiesValue,
                image: imageUrl,
                postAt: "01 Januari 2024",
                author: "Ravano Akbar Widodo"
            }

            dataMyProject.push(MyProject);
            console.log("dataMy-Project", dataMyProject)
            renderMyProject();
        }
    }
}

function renderMyProject() {
    const contentsElement = document.getElementById("contents");
    contentsElement.innerHTML = '';

    for (let index = 0; index < dataMyProject.length; index++) {
        contentsElement.innerHTML += `
        <div class="My-Project-list-item">
            <div class="My-Project-image">
                <img src="${dataMyProject[index].image}" alt="" />
            </div>
            <div class="My-Project-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Delete Post</button>
                </div>
                <h1 style="text-align: left;">
                    <a href="My-Project-detail.html" target="_blank">${dataMyProject[index].title}</a>
                </h1>
                <div class="detail-My-Project-content" style="text-align: left;">
                    ${dataMyProject[index].postAt} | ${dataMyProject[index].author}
                </div>
                <p style="text-align: center;">
                   ${dataMyProject[index].content}
                </p>
                <br>
                <div class="technologies" style="text-align: center;">
                    <label>Technologies :</label>
                    <ul style="list-style: none; padding: 0;">
                        ${dataMyProject[index].technologies.map((tech) => `<li>${tech}</li>`).join('')}
                    </ul>
                </div>
                <br>
                <div class="card-icons" style="text-align: left;">
                    <i class="fa-brands fa-google-play fa-xl"></i>
                    <i class="fa-brands fa-android fa-xl"></i>
                    <i class="fa-brands fa-java fa-lg"></i>
                </div>
            </div>
        </div>
     </div>`;
  }
}
