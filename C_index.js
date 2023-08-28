function CellMerge(Table, ColIdx) {
  var TargetCell = null;
  $(Table)
    .find("tbody tr")
    .each(function (i) {
      var tr = $(this),
        td = tr.find("td").eq(ColIdx);
      var prevTr = tr.prev(),
        prevTd = prevTr.find("td").eq(ColIdx);
      if (i > 0 && td.text() == prevTd.text()) {
        //console.log(i, TargetCell.prop("rowSpan"));
        var rowSpan = Number(TargetCell.prop("rowSpan")) ?? 1;
        TargetCell.prop("rowSpan", rowSpan + 1);
        td.attr("remove", "1").hide();
      } else {
        TargetCell = td;
      }
    });

  $(Table).find("td[remove]").remove();
}
CellMerge($("#Ratio1"), 0);
