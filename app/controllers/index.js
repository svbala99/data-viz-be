// exports
exports.findAll = (req, res) => {
  try {
    res.status(200).send({ id: 1, name: "bala" });
  } catch (e) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};
