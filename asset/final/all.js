// add all function

function addall() {
  const message = $("#message");
  message.css("display", "block");
  message.addClass("text-success");
  message.html("your task was deleted successfully");
}

const element = document.createElement("div");

let allelment;

// end of add all function

function showall() {
  // all the container
  const containerz = document.getElementById("append");
  const elementz = document.getElementById("check");

  const appender = document.getElementById("append");

  axios
    .get("http://localhost:3500/api/getall")
    .then((userdata) => {
      const alltask = userdata.data;
      console.log("i have been reached");

      alltask.forEach((e) => {
        if (e.complete === false) {
          $(appender)
            .append(`   <div class="output general incomplete" id="check">
          <div class="correct-img">
            <img src="../img/Asset 35.png" alt="" />
          </div>
          <div class="para p-2 para__task" id="maindata">${e.task}</div>
          <div class="d-flex">
            <div class="pointer p-1 mx-2">
              <a href="task.html?id=${e._id}">
                <img src="../img/Asset 34.png" alt="" />
              </a>
            </div>
            <div
              class="pointer p-1 mx-2"
              onclick="deleteUsers('${e._id}')"
            >
              <img src="../img/Asset 33.png" alt="" />
            </div>
          </div>
        </div>`);
        } else {
          $(appender)
            .append(`   <div class="output general complete" id="check">
          <div class="correct-img">
            <img src="../img/Asset 35.png" alt="" />
          </div>
          <div class="para p-2 para__task" id="maindata">${e.task}</div>
          <div class="d-flex">
            <div class="pointer p-1 mx-2">
              <a href="task.html?id=${e._id}">
                <img src="../img/Asset 34.png" alt="" />
              </a>
            </div>
            <div
              class="pointer p-1 mx-2"
              onclick="deleteUsers('${e._id}')"
            >
              <img src="../img/Asset 33.png" alt="" />
            </div>
          </div>
        </div>`);
        }
      });
    })
    .catch((err) => {
      $("#errorz").html("there in as error in the form");

      $("#strong").html("sorry unable to connect to the database");
      setTimeout(() => {
        $("#strong").css("display", "none");
        $("#errorz").css("display", "none");
      }, 3000);
    });
}

$(document).ready(() => {
  showall();
  $("#message").css("display", "none");
});

// posting the data to the database

function add() {
  const taskval = $("#post").val();

  axios
    .post("http://localhost:3500/api/post", {
      task: taskval,
    })
    .then(() => {
      location.reload();
    })
    .catch(() => {
      $("#errorz").css("display", "block");
      $("#errorz").html("please fill the form");
      setTimeout(() => {
        $("#errorz").css("display", "none");
      }, 2000);
    });
}

function deleteUsers(id) {
  // using the axios delte function

  const idtodelete = id;

  axios
    .delete(`http://localhost:3500/api/delete/${idtodelete}`)
    .then(() => {
      addall();
      location.reload();
    })
    .catch((err) => {
      $("#message").html("there was a massive error");
    });
}
