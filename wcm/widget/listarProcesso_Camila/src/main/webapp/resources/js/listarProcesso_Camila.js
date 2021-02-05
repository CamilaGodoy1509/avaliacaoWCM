var MyDataTable = SuperWidget.extend({

	myTable: null,
	mydata: [],
	tableData: null,

	bindings: {
		local: {
            'datatable-del-row': ['click_delRow'],
            'datatable-reload': ['click_reload'],
			'datatable-show-column1': ['click_showColumn1'],
            'datatable-hide-column1': ['click_hideColumn1'],
			'datatable-show-column2': ['click_showColumn2'],
            'datatable-hide-column2': ['click_hideColumn2'],
            'datatable-show-column3': ['click_showColumn3'],
            'datatable-hide-column3': ['click_hideColumn3']
		},
		global: {}
	},

	init: function() {
		this.loadTable();
	},

	loadTable: function() {

        var that = this;
        var datasetReturned = DatasetFactory.getDataset("colleague", null, null, null);
        console.log(datasetReturned)
        if (datasetReturned != null && datasetReturned.values != null && datasetReturned.values.length > 0) {
            var records = datasetReturned.values;
            for ( var index in records) {
                var record = records[index];
                that.mydata.push({
                    id: record.userTenantId,
                    name: record.colleagueName,
                    email: record.mail
                });
            }
        }
        that.myTable = FLUIGC.datatable('#idtable' + "_" + that.instanceId, {
            dataRequest: that.mydata,
            renderContent: ['id', 'name', 'email'],
            header: [{
                'title': 'Id',
                'dataorder': 'name',
                'size': 'col-md-4'
            }, {
                'title': 'Nome',
                'standard': true,
                'size': 'col-md-4'
            }, {
                'title': 'E-mail',
                'size': 'col-md-4',
                'dataorder': 'ASC'
            }],
            search: {
				enabled: true,
				onlyEnterkey: true,
				searchAreaStyle: 'col-md-5',
				onSearch: function(res) {
					that.myTable.reload(that.tableData);
					if (res) {
						var data = that.myTable.getData();
						var search = data.filter(function(el) {
							return el.name.toUpperCase().indexOf(res.toUpperCase()) >= 0;
						});
						that.myTable.reload(search);
					}
				}
			},
            scroll: {
                target: ".target",
                enabled: true
            },
            actions: {
				enabled: true,
				template: '.mydatatable-template-row-area-buttons',
				actionAreaStyle: 'col-md-6'
			},
            navButtons: {
				enabled: true,
				forwardstyle: 'btn-warning',
				backwardstyle: 'btn-warning',
			},
            draggable: {
                enabled: false
            },
        }, function(err, data) {
            if (err) {
                FLUIGC.toast({
                    message: err,
                    type: 'danger'
                });
            }
        });
        that.myTable.on('fluig.datatable.loadcomplete', function() {
            if (!that.tableData) {
                that.tableData = that.myTable.getData();
            }
        });

	},

	delRow: function(el, ev) {
		var itemsToRemove = this.myTable.selectedRows();

		if (itemsToRemove.length > 0) {
			for (var i = 0; i <= itemsToRemove.length; i++) {
				this.myTable.removeRow(this.myTable.selectedRows()[0]);
			}
		}

		FLUIGC.toast({
			title: '',
			message: "Linha Removida",
			type: 'success'
		});

	},

	reload: function(el, ev) {
		this.myTable.reload();
	},

	showColumn1: function(el, ev) {
		var index = 0;
		this.myTable.showColumn(index);
	},

	hideColumn1: function(el, ev) {
		var index = 0;
		this.myTable.hideColumn(index);
    },

    showColumn2: function(el, ev) {
		var index = 1;
		this.myTable.showColumn(index);
	},
    
    hideColumn2: function(el, ev) {
		var index = 1;
		this.myTable.hideColumn(index);
    },
    
    showColumn3: function(el, ev) {
		var index = 2;
		this.myTable.showColumn(index);
	},
    
    hideColumn3: function(el, ev) {
		var index = 2;
		this.myTable.hideColumn(index);
	}

});