const params = window.location.search;

const id = new URLSearchParams(params).get("id");

console.log(id);

// putting values in the input fields

$(document).ready(() => {
  axios
    .get(`http://localhost:3500/api/getall?id=${id}`)
    .then((data) => {
      const putter = data.data;
      $("#inputtask").val(putter.task);
      $("#id").html(putter._id);
      if (putter.complete == true) {
        $("#checkbox").attr("checked", true);
      } else {
        $("#checkbox").attr("checked", false);
      }
    })
    .catch((err) => {
      $("#message2").html("there was an error with the server");
      $("#message2").addClass("text-danger");
      setTimeout(() => {
        $("#message2").css("display", "none");
      }, 3000);
    });
});

// end
function edit() {
  const task = $("#inputtask").val();

  function checked() {
    const check = $("#checkbox").is(":checked");

    if (check) {
      return $("#checkbox").val();
    } else {
      return false;
    }
  }

  console.log(task);
  axios
    .put(`http://localhost:3500/api/put/${id}`, {
      task: task,
      complete: checked(),
    })
    .then((data) => {
      $("#message2").html("task updated sucessfully");
      $("#message2").addClass("text-success");
      $(location).attr("href", "/final/index.html");
    })
    .catch((err) => {
      $("#message2").html("there was an error with the server");
      $("#message2").addClass("text-danger");
    });
}
