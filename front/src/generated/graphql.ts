import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
};



/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "component" */
export type Component = {
  __typename?: 'component';
  id: Scalars['Int'];
  image_url: Scalars['String'];
  name: Scalars['String'];
  sink_value: Scalars['Int'];
  stack_size: Scalars['Int'];
};

/** aggregated selection of "component" */
export type Component_Aggregate = {
  __typename?: 'component_aggregate';
  aggregate?: Maybe<Component_Aggregate_Fields>;
  nodes: Array<Component>;
};

/** aggregate fields of "component" */
export type Component_Aggregate_Fields = {
  __typename?: 'component_aggregate_fields';
  avg?: Maybe<Component_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Component_Max_Fields>;
  min?: Maybe<Component_Min_Fields>;
  stddev?: Maybe<Component_Stddev_Fields>;
  stddev_pop?: Maybe<Component_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Component_Stddev_Samp_Fields>;
  sum?: Maybe<Component_Sum_Fields>;
  var_pop?: Maybe<Component_Var_Pop_Fields>;
  var_samp?: Maybe<Component_Var_Samp_Fields>;
  variance?: Maybe<Component_Variance_Fields>;
};


/** aggregate fields of "component" */
export type Component_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Component_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "component" */
export type Component_Aggregate_Order_By = {
  avg?: Maybe<Component_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Component_Max_Order_By>;
  min?: Maybe<Component_Min_Order_By>;
  stddev?: Maybe<Component_Stddev_Order_By>;
  stddev_pop?: Maybe<Component_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Component_Stddev_Samp_Order_By>;
  sum?: Maybe<Component_Sum_Order_By>;
  var_pop?: Maybe<Component_Var_Pop_Order_By>;
  var_samp?: Maybe<Component_Var_Samp_Order_By>;
  variance?: Maybe<Component_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "component" */
export type Component_Arr_Rel_Insert_Input = {
  data: Array<Component_Insert_Input>;
  on_conflict?: Maybe<Component_On_Conflict>;
};

/** aggregate avg on columns */
export type Component_Avg_Fields = {
  __typename?: 'component_avg_fields';
  id?: Maybe<Scalars['Float']>;
  sink_value?: Maybe<Scalars['Float']>;
  stack_size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "component" */
export type Component_Avg_Order_By = {
  id?: Maybe<Order_By>;
  sink_value?: Maybe<Order_By>;
  stack_size?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "component". All fields are combined with a logical 'AND'. */
export type Component_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Component_Bool_Exp>>>;
  _not?: Maybe<Component_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Component_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  sink_value?: Maybe<Int_Comparison_Exp>;
  stack_size?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "component" */
export enum Component_Constraint {
  /** unique or primary key constraint */
  ComponentPkey = 'component_pkey'
}

/** input type for incrementing integer column in table "component" */
export type Component_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  sink_value?: Maybe<Scalars['Int']>;
  stack_size?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "component" */
export type Component_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sink_value?: Maybe<Scalars['Int']>;
  stack_size?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Component_Max_Fields = {
  __typename?: 'component_max_fields';
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sink_value?: Maybe<Scalars['Int']>;
  stack_size?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "component" */
export type Component_Max_Order_By = {
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sink_value?: Maybe<Order_By>;
  stack_size?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Component_Min_Fields = {
  __typename?: 'component_min_fields';
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sink_value?: Maybe<Scalars['Int']>;
  stack_size?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "component" */
export type Component_Min_Order_By = {
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sink_value?: Maybe<Order_By>;
  stack_size?: Maybe<Order_By>;
};

/** response of any mutation on the table "component" */
export type Component_Mutation_Response = {
  __typename?: 'component_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Component>;
};

/** input type for inserting object relation for remote table "component" */
export type Component_Obj_Rel_Insert_Input = {
  data: Component_Insert_Input;
  on_conflict?: Maybe<Component_On_Conflict>;
};

/** on conflict condition type for table "component" */
export type Component_On_Conflict = {
  constraint: Component_Constraint;
  update_columns: Array<Component_Update_Column>;
  where?: Maybe<Component_Bool_Exp>;
};

/** ordering options when selecting data from "component" */
export type Component_Order_By = {
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sink_value?: Maybe<Order_By>;
  stack_size?: Maybe<Order_By>;
};

/** primary key columns input for table: "component" */
export type Component_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "component" */
export enum Component_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  SinkValue = 'sink_value',
  /** column name */
  StackSize = 'stack_size'
}

/** input type for updating data in table "component" */
export type Component_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sink_value?: Maybe<Scalars['Int']>;
  stack_size?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Component_Stddev_Fields = {
  __typename?: 'component_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  sink_value?: Maybe<Scalars['Float']>;
  stack_size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "component" */
export type Component_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  sink_value?: Maybe<Order_By>;
  stack_size?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Component_Stddev_Pop_Fields = {
  __typename?: 'component_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  sink_value?: Maybe<Scalars['Float']>;
  stack_size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "component" */
export type Component_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  sink_value?: Maybe<Order_By>;
  stack_size?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Component_Stddev_Samp_Fields = {
  __typename?: 'component_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  sink_value?: Maybe<Scalars['Float']>;
  stack_size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "component" */
export type Component_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  sink_value?: Maybe<Order_By>;
  stack_size?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Component_Sum_Fields = {
  __typename?: 'component_sum_fields';
  id?: Maybe<Scalars['Int']>;
  sink_value?: Maybe<Scalars['Int']>;
  stack_size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "component" */
export type Component_Sum_Order_By = {
  id?: Maybe<Order_By>;
  sink_value?: Maybe<Order_By>;
  stack_size?: Maybe<Order_By>;
};

/** update columns of table "component" */
export enum Component_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  SinkValue = 'sink_value',
  /** column name */
  StackSize = 'stack_size'
}

/** aggregate var_pop on columns */
export type Component_Var_Pop_Fields = {
  __typename?: 'component_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  sink_value?: Maybe<Scalars['Float']>;
  stack_size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "component" */
export type Component_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  sink_value?: Maybe<Order_By>;
  stack_size?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Component_Var_Samp_Fields = {
  __typename?: 'component_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  sink_value?: Maybe<Scalars['Float']>;
  stack_size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "component" */
export type Component_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  sink_value?: Maybe<Order_By>;
  stack_size?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Component_Variance_Fields = {
  __typename?: 'component_variance_fields';
  id?: Maybe<Scalars['Float']>;
  sink_value?: Maybe<Scalars['Float']>;
  stack_size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "component" */
export type Component_Variance_Order_By = {
  id?: Maybe<Order_By>;
  sink_value?: Maybe<Order_By>;
  stack_size?: Maybe<Order_By>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "component" */
  delete_component?: Maybe<Component_Mutation_Response>;
  /** delete single row from the table: "component" */
  delete_component_by_pk?: Maybe<Component>;
  /** delete data from the table: "production_structure" */
  delete_production_structure?: Maybe<Production_Structure_Mutation_Response>;
  /** delete single row from the table: "production_structure" */
  delete_production_structure_by_pk?: Maybe<Production_Structure>;
  /** delete data from the table: "recipe" */
  delete_recipe?: Maybe<Recipe_Mutation_Response>;
  /** delete single row from the table: "recipe" */
  delete_recipe_by_pk?: Maybe<Recipe>;
  /** delete data from the table: "recipe_input" */
  delete_recipe_input?: Maybe<Recipe_Input_Mutation_Response>;
  /** delete single row from the table: "recipe_input" */
  delete_recipe_input_by_pk?: Maybe<Recipe_Input>;
  /** delete data from the table: "recipe_output" */
  delete_recipe_output?: Maybe<Recipe_Output_Mutation_Response>;
  /** delete single row from the table: "recipe_output" */
  delete_recipe_output_by_pk?: Maybe<Recipe_Output>;
  /** insert data into the table: "component" */
  insert_component?: Maybe<Component_Mutation_Response>;
  /** insert a single row into the table: "component" */
  insert_component_one?: Maybe<Component>;
  /** insert data into the table: "production_structure" */
  insert_production_structure?: Maybe<Production_Structure_Mutation_Response>;
  /** insert a single row into the table: "production_structure" */
  insert_production_structure_one?: Maybe<Production_Structure>;
  /** insert data into the table: "recipe" */
  insert_recipe?: Maybe<Recipe_Mutation_Response>;
  /** insert data into the table: "recipe_input" */
  insert_recipe_input?: Maybe<Recipe_Input_Mutation_Response>;
  /** insert a single row into the table: "recipe_input" */
  insert_recipe_input_one?: Maybe<Recipe_Input>;
  /** insert a single row into the table: "recipe" */
  insert_recipe_one?: Maybe<Recipe>;
  /** insert data into the table: "recipe_output" */
  insert_recipe_output?: Maybe<Recipe_Output_Mutation_Response>;
  /** insert a single row into the table: "recipe_output" */
  insert_recipe_output_one?: Maybe<Recipe_Output>;
  /** update data of the table: "component" */
  update_component?: Maybe<Component_Mutation_Response>;
  /** update single row of the table: "component" */
  update_component_by_pk?: Maybe<Component>;
  /** update data of the table: "production_structure" */
  update_production_structure?: Maybe<Production_Structure_Mutation_Response>;
  /** update single row of the table: "production_structure" */
  update_production_structure_by_pk?: Maybe<Production_Structure>;
  /** update data of the table: "recipe" */
  update_recipe?: Maybe<Recipe_Mutation_Response>;
  /** update single row of the table: "recipe" */
  update_recipe_by_pk?: Maybe<Recipe>;
  /** update data of the table: "recipe_input" */
  update_recipe_input?: Maybe<Recipe_Input_Mutation_Response>;
  /** update single row of the table: "recipe_input" */
  update_recipe_input_by_pk?: Maybe<Recipe_Input>;
  /** update data of the table: "recipe_output" */
  update_recipe_output?: Maybe<Recipe_Output_Mutation_Response>;
  /** update single row of the table: "recipe_output" */
  update_recipe_output_by_pk?: Maybe<Recipe_Output>;
};


/** mutation root */
export type Mutation_RootDelete_ComponentArgs = {
  where: Component_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Component_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Production_StructureArgs = {
  where: Production_Structure_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Production_Structure_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RecipeArgs = {
  where: Recipe_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recipe_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Recipe_InputArgs = {
  where: Recipe_Input_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recipe_Input_By_PkArgs = {
  component_id: Scalars['Int'];
  recipe_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Recipe_OutputArgs = {
  where: Recipe_Output_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recipe_Output_By_PkArgs = {
  component_id: Scalars['Int'];
  recipe_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ComponentArgs = {
  objects: Array<Component_Insert_Input>;
  on_conflict?: Maybe<Component_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Component_OneArgs = {
  object: Component_Insert_Input;
  on_conflict?: Maybe<Component_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Production_StructureArgs = {
  objects: Array<Production_Structure_Insert_Input>;
  on_conflict?: Maybe<Production_Structure_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Production_Structure_OneArgs = {
  object: Production_Structure_Insert_Input;
  on_conflict?: Maybe<Production_Structure_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RecipeArgs = {
  objects: Array<Recipe_Insert_Input>;
  on_conflict?: Maybe<Recipe_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recipe_InputArgs = {
  objects: Array<Recipe_Input_Insert_Input>;
  on_conflict?: Maybe<Recipe_Input_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recipe_Input_OneArgs = {
  object: Recipe_Input_Insert_Input;
  on_conflict?: Maybe<Recipe_Input_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recipe_OneArgs = {
  object: Recipe_Insert_Input;
  on_conflict?: Maybe<Recipe_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recipe_OutputArgs = {
  objects: Array<Recipe_Output_Insert_Input>;
  on_conflict?: Maybe<Recipe_Output_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recipe_Output_OneArgs = {
  object: Recipe_Output_Insert_Input;
  on_conflict?: Maybe<Recipe_Output_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ComponentArgs = {
  _inc?: Maybe<Component_Inc_Input>;
  _set?: Maybe<Component_Set_Input>;
  where: Component_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Component_By_PkArgs = {
  _inc?: Maybe<Component_Inc_Input>;
  _set?: Maybe<Component_Set_Input>;
  pk_columns: Component_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Production_StructureArgs = {
  _inc?: Maybe<Production_Structure_Inc_Input>;
  _set?: Maybe<Production_Structure_Set_Input>;
  where: Production_Structure_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Production_Structure_By_PkArgs = {
  _inc?: Maybe<Production_Structure_Inc_Input>;
  _set?: Maybe<Production_Structure_Set_Input>;
  pk_columns: Production_Structure_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RecipeArgs = {
  _inc?: Maybe<Recipe_Inc_Input>;
  _set?: Maybe<Recipe_Set_Input>;
  where: Recipe_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_By_PkArgs = {
  _inc?: Maybe<Recipe_Inc_Input>;
  _set?: Maybe<Recipe_Set_Input>;
  pk_columns: Recipe_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_InputArgs = {
  _inc?: Maybe<Recipe_Input_Inc_Input>;
  _set?: Maybe<Recipe_Input_Set_Input>;
  where: Recipe_Input_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_Input_By_PkArgs = {
  _inc?: Maybe<Recipe_Input_Inc_Input>;
  _set?: Maybe<Recipe_Input_Set_Input>;
  pk_columns: Recipe_Input_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_OutputArgs = {
  _inc?: Maybe<Recipe_Output_Inc_Input>;
  _set?: Maybe<Recipe_Output_Set_Input>;
  where: Recipe_Output_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_Output_By_PkArgs = {
  _inc?: Maybe<Recipe_Output_Inc_Input>;
  _set?: Maybe<Recipe_Output_Set_Input>;
  pk_columns: Recipe_Output_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "production_structure" */
export type Production_Structure = {
  __typename?: 'production_structure';
  energy_consumption: Scalars['numeric'];
  id: Scalars['Int'];
  image_url: Scalars['String'];
  liquid_input: Scalars['Int'];
  liquid_output: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  recipes: Array<Recipe>;
  /** An aggregated array relationship */
  recipes_aggregate: Recipe_Aggregate;
  solid_input: Scalars['Int'];
  solid_output: Scalars['Int'];
  subcategory?: Maybe<Scalars['String']>;
};


/** columns and relationships of "production_structure" */
export type Production_StructureRecipesArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};


/** columns and relationships of "production_structure" */
export type Production_StructureRecipes_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** aggregated selection of "production_structure" */
export type Production_Structure_Aggregate = {
  __typename?: 'production_structure_aggregate';
  aggregate?: Maybe<Production_Structure_Aggregate_Fields>;
  nodes: Array<Production_Structure>;
};

/** aggregate fields of "production_structure" */
export type Production_Structure_Aggregate_Fields = {
  __typename?: 'production_structure_aggregate_fields';
  avg?: Maybe<Production_Structure_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Production_Structure_Max_Fields>;
  min?: Maybe<Production_Structure_Min_Fields>;
  stddev?: Maybe<Production_Structure_Stddev_Fields>;
  stddev_pop?: Maybe<Production_Structure_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Production_Structure_Stddev_Samp_Fields>;
  sum?: Maybe<Production_Structure_Sum_Fields>;
  var_pop?: Maybe<Production_Structure_Var_Pop_Fields>;
  var_samp?: Maybe<Production_Structure_Var_Samp_Fields>;
  variance?: Maybe<Production_Structure_Variance_Fields>;
};


/** aggregate fields of "production_structure" */
export type Production_Structure_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Production_Structure_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "production_structure" */
export type Production_Structure_Aggregate_Order_By = {
  avg?: Maybe<Production_Structure_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Production_Structure_Max_Order_By>;
  min?: Maybe<Production_Structure_Min_Order_By>;
  stddev?: Maybe<Production_Structure_Stddev_Order_By>;
  stddev_pop?: Maybe<Production_Structure_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Production_Structure_Stddev_Samp_Order_By>;
  sum?: Maybe<Production_Structure_Sum_Order_By>;
  var_pop?: Maybe<Production_Structure_Var_Pop_Order_By>;
  var_samp?: Maybe<Production_Structure_Var_Samp_Order_By>;
  variance?: Maybe<Production_Structure_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "production_structure" */
export type Production_Structure_Arr_Rel_Insert_Input = {
  data: Array<Production_Structure_Insert_Input>;
  on_conflict?: Maybe<Production_Structure_On_Conflict>;
};

/** aggregate avg on columns */
export type Production_Structure_Avg_Fields = {
  __typename?: 'production_structure_avg_fields';
  energy_consumption?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  liquid_input?: Maybe<Scalars['Float']>;
  liquid_output?: Maybe<Scalars['Float']>;
  solid_input?: Maybe<Scalars['Float']>;
  solid_output?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "production_structure" */
export type Production_Structure_Avg_Order_By = {
  energy_consumption?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  liquid_input?: Maybe<Order_By>;
  liquid_output?: Maybe<Order_By>;
  solid_input?: Maybe<Order_By>;
  solid_output?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "production_structure". All fields are combined with a logical 'AND'. */
export type Production_Structure_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Production_Structure_Bool_Exp>>>;
  _not?: Maybe<Production_Structure_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Production_Structure_Bool_Exp>>>;
  energy_consumption?: Maybe<Numeric_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  liquid_input?: Maybe<Int_Comparison_Exp>;
  liquid_output?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  recipes?: Maybe<Recipe_Bool_Exp>;
  solid_input?: Maybe<Int_Comparison_Exp>;
  solid_output?: Maybe<Int_Comparison_Exp>;
  subcategory?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "production_structure" */
export enum Production_Structure_Constraint {
  /** unique or primary key constraint */
  ProductionTructurePkey = 'production_tructure_pkey'
}

/** input type for incrementing integer column in table "production_structure" */
export type Production_Structure_Inc_Input = {
  energy_consumption?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  liquid_input?: Maybe<Scalars['Int']>;
  liquid_output?: Maybe<Scalars['Int']>;
  solid_input?: Maybe<Scalars['Int']>;
  solid_output?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "production_structure" */
export type Production_Structure_Insert_Input = {
  energy_consumption?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  liquid_input?: Maybe<Scalars['Int']>;
  liquid_output?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  recipes?: Maybe<Recipe_Arr_Rel_Insert_Input>;
  solid_input?: Maybe<Scalars['Int']>;
  solid_output?: Maybe<Scalars['Int']>;
  subcategory?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Production_Structure_Max_Fields = {
  __typename?: 'production_structure_max_fields';
  energy_consumption?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  liquid_input?: Maybe<Scalars['Int']>;
  liquid_output?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  solid_input?: Maybe<Scalars['Int']>;
  solid_output?: Maybe<Scalars['Int']>;
  subcategory?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "production_structure" */
export type Production_Structure_Max_Order_By = {
  energy_consumption?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  liquid_input?: Maybe<Order_By>;
  liquid_output?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  solid_input?: Maybe<Order_By>;
  solid_output?: Maybe<Order_By>;
  subcategory?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Production_Structure_Min_Fields = {
  __typename?: 'production_structure_min_fields';
  energy_consumption?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  liquid_input?: Maybe<Scalars['Int']>;
  liquid_output?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  solid_input?: Maybe<Scalars['Int']>;
  solid_output?: Maybe<Scalars['Int']>;
  subcategory?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "production_structure" */
export type Production_Structure_Min_Order_By = {
  energy_consumption?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  liquid_input?: Maybe<Order_By>;
  liquid_output?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  solid_input?: Maybe<Order_By>;
  solid_output?: Maybe<Order_By>;
  subcategory?: Maybe<Order_By>;
};

/** response of any mutation on the table "production_structure" */
export type Production_Structure_Mutation_Response = {
  __typename?: 'production_structure_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Production_Structure>;
};

/** input type for inserting object relation for remote table "production_structure" */
export type Production_Structure_Obj_Rel_Insert_Input = {
  data: Production_Structure_Insert_Input;
  on_conflict?: Maybe<Production_Structure_On_Conflict>;
};

/** on conflict condition type for table "production_structure" */
export type Production_Structure_On_Conflict = {
  constraint: Production_Structure_Constraint;
  update_columns: Array<Production_Structure_Update_Column>;
  where?: Maybe<Production_Structure_Bool_Exp>;
};

/** ordering options when selecting data from "production_structure" */
export type Production_Structure_Order_By = {
  energy_consumption?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  liquid_input?: Maybe<Order_By>;
  liquid_output?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  recipes_aggregate?: Maybe<Recipe_Aggregate_Order_By>;
  solid_input?: Maybe<Order_By>;
  solid_output?: Maybe<Order_By>;
  subcategory?: Maybe<Order_By>;
};

/** primary key columns input for table: "production_structure" */
export type Production_Structure_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "production_structure" */
export enum Production_Structure_Select_Column {
  /** column name */
  EnergyConsumption = 'energy_consumption',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  LiquidInput = 'liquid_input',
  /** column name */
  LiquidOutput = 'liquid_output',
  /** column name */
  Name = 'name',
  /** column name */
  SolidInput = 'solid_input',
  /** column name */
  SolidOutput = 'solid_output',
  /** column name */
  Subcategory = 'subcategory'
}

/** input type for updating data in table "production_structure" */
export type Production_Structure_Set_Input = {
  energy_consumption?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  liquid_input?: Maybe<Scalars['Int']>;
  liquid_output?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  solid_input?: Maybe<Scalars['Int']>;
  solid_output?: Maybe<Scalars['Int']>;
  subcategory?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Production_Structure_Stddev_Fields = {
  __typename?: 'production_structure_stddev_fields';
  energy_consumption?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  liquid_input?: Maybe<Scalars['Float']>;
  liquid_output?: Maybe<Scalars['Float']>;
  solid_input?: Maybe<Scalars['Float']>;
  solid_output?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "production_structure" */
export type Production_Structure_Stddev_Order_By = {
  energy_consumption?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  liquid_input?: Maybe<Order_By>;
  liquid_output?: Maybe<Order_By>;
  solid_input?: Maybe<Order_By>;
  solid_output?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Production_Structure_Stddev_Pop_Fields = {
  __typename?: 'production_structure_stddev_pop_fields';
  energy_consumption?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  liquid_input?: Maybe<Scalars['Float']>;
  liquid_output?: Maybe<Scalars['Float']>;
  solid_input?: Maybe<Scalars['Float']>;
  solid_output?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "production_structure" */
export type Production_Structure_Stddev_Pop_Order_By = {
  energy_consumption?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  liquid_input?: Maybe<Order_By>;
  liquid_output?: Maybe<Order_By>;
  solid_input?: Maybe<Order_By>;
  solid_output?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Production_Structure_Stddev_Samp_Fields = {
  __typename?: 'production_structure_stddev_samp_fields';
  energy_consumption?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  liquid_input?: Maybe<Scalars['Float']>;
  liquid_output?: Maybe<Scalars['Float']>;
  solid_input?: Maybe<Scalars['Float']>;
  solid_output?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "production_structure" */
export type Production_Structure_Stddev_Samp_Order_By = {
  energy_consumption?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  liquid_input?: Maybe<Order_By>;
  liquid_output?: Maybe<Order_By>;
  solid_input?: Maybe<Order_By>;
  solid_output?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Production_Structure_Sum_Fields = {
  __typename?: 'production_structure_sum_fields';
  energy_consumption?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  liquid_input?: Maybe<Scalars['Int']>;
  liquid_output?: Maybe<Scalars['Int']>;
  solid_input?: Maybe<Scalars['Int']>;
  solid_output?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "production_structure" */
export type Production_Structure_Sum_Order_By = {
  energy_consumption?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  liquid_input?: Maybe<Order_By>;
  liquid_output?: Maybe<Order_By>;
  solid_input?: Maybe<Order_By>;
  solid_output?: Maybe<Order_By>;
};

/** update columns of table "production_structure" */
export enum Production_Structure_Update_Column {
  /** column name */
  EnergyConsumption = 'energy_consumption',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  LiquidInput = 'liquid_input',
  /** column name */
  LiquidOutput = 'liquid_output',
  /** column name */
  Name = 'name',
  /** column name */
  SolidInput = 'solid_input',
  /** column name */
  SolidOutput = 'solid_output',
  /** column name */
  Subcategory = 'subcategory'
}

/** aggregate var_pop on columns */
export type Production_Structure_Var_Pop_Fields = {
  __typename?: 'production_structure_var_pop_fields';
  energy_consumption?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  liquid_input?: Maybe<Scalars['Float']>;
  liquid_output?: Maybe<Scalars['Float']>;
  solid_input?: Maybe<Scalars['Float']>;
  solid_output?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "production_structure" */
export type Production_Structure_Var_Pop_Order_By = {
  energy_consumption?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  liquid_input?: Maybe<Order_By>;
  liquid_output?: Maybe<Order_By>;
  solid_input?: Maybe<Order_By>;
  solid_output?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Production_Structure_Var_Samp_Fields = {
  __typename?: 'production_structure_var_samp_fields';
  energy_consumption?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  liquid_input?: Maybe<Scalars['Float']>;
  liquid_output?: Maybe<Scalars['Float']>;
  solid_input?: Maybe<Scalars['Float']>;
  solid_output?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "production_structure" */
export type Production_Structure_Var_Samp_Order_By = {
  energy_consumption?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  liquid_input?: Maybe<Order_By>;
  liquid_output?: Maybe<Order_By>;
  solid_input?: Maybe<Order_By>;
  solid_output?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Production_Structure_Variance_Fields = {
  __typename?: 'production_structure_variance_fields';
  energy_consumption?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  liquid_input?: Maybe<Scalars['Float']>;
  liquid_output?: Maybe<Scalars['Float']>;
  solid_input?: Maybe<Scalars['Float']>;
  solid_output?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "production_structure" */
export type Production_Structure_Variance_Order_By = {
  energy_consumption?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  liquid_input?: Maybe<Order_By>;
  liquid_output?: Maybe<Order_By>;
  solid_input?: Maybe<Order_By>;
  solid_output?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "component" */
  component: Array<Component>;
  /** fetch aggregated fields from the table: "component" */
  component_aggregate: Component_Aggregate;
  /** fetch data from the table: "component" using primary key columns */
  component_by_pk?: Maybe<Component>;
  /** fetch data from the table: "production_structure" */
  production_structure: Array<Production_Structure>;
  /** fetch aggregated fields from the table: "production_structure" */
  production_structure_aggregate: Production_Structure_Aggregate;
  /** fetch data from the table: "production_structure" using primary key columns */
  production_structure_by_pk?: Maybe<Production_Structure>;
  /** fetch data from the table: "recipe" */
  recipe: Array<Recipe>;
  /** fetch aggregated fields from the table: "recipe" */
  recipe_aggregate: Recipe_Aggregate;
  /** fetch data from the table: "recipe" using primary key columns */
  recipe_by_pk?: Maybe<Recipe>;
  /** fetch data from the table: "recipe_input" */
  recipe_input: Array<Recipe_Input>;
  /** fetch aggregated fields from the table: "recipe_input" */
  recipe_input_aggregate: Recipe_Input_Aggregate;
  /** fetch data from the table: "recipe_input" using primary key columns */
  recipe_input_by_pk?: Maybe<Recipe_Input>;
  /** fetch data from the table: "recipe_output" */
  recipe_output: Array<Recipe_Output>;
  /** fetch aggregated fields from the table: "recipe_output" */
  recipe_output_aggregate: Recipe_Output_Aggregate;
  /** fetch data from the table: "recipe_output" using primary key columns */
  recipe_output_by_pk?: Maybe<Recipe_Output>;
};


/** query root */
export type Query_RootComponentArgs = {
  distinct_on?: Maybe<Array<Component_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Component_Order_By>>;
  where?: Maybe<Component_Bool_Exp>;
};


/** query root */
export type Query_RootComponent_AggregateArgs = {
  distinct_on?: Maybe<Array<Component_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Component_Order_By>>;
  where?: Maybe<Component_Bool_Exp>;
};


/** query root */
export type Query_RootComponent_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootProduction_StructureArgs = {
  distinct_on?: Maybe<Array<Production_Structure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Production_Structure_Order_By>>;
  where?: Maybe<Production_Structure_Bool_Exp>;
};


/** query root */
export type Query_RootProduction_Structure_AggregateArgs = {
  distinct_on?: Maybe<Array<Production_Structure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Production_Structure_Order_By>>;
  where?: Maybe<Production_Structure_Bool_Exp>;
};


/** query root */
export type Query_RootProduction_Structure_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRecipeArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};


/** query root */
export type Query_RootRecipe_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};


/** query root */
export type Query_RootRecipe_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRecipe_InputArgs = {
  distinct_on?: Maybe<Array<Recipe_Input_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Input_Order_By>>;
  where?: Maybe<Recipe_Input_Bool_Exp>;
};


/** query root */
export type Query_RootRecipe_Input_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Input_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Input_Order_By>>;
  where?: Maybe<Recipe_Input_Bool_Exp>;
};


/** query root */
export type Query_RootRecipe_Input_By_PkArgs = {
  component_id: Scalars['Int'];
  recipe_id: Scalars['Int'];
};


/** query root */
export type Query_RootRecipe_OutputArgs = {
  distinct_on?: Maybe<Array<Recipe_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Output_Order_By>>;
  where?: Maybe<Recipe_Output_Bool_Exp>;
};


/** query root */
export type Query_RootRecipe_Output_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Output_Order_By>>;
  where?: Maybe<Recipe_Output_Bool_Exp>;
};


/** query root */
export type Query_RootRecipe_Output_By_PkArgs = {
  component_id: Scalars['Int'];
  recipe_id: Scalars['Int'];
};

/** columns and relationships of "recipe" */
export type Recipe = {
  __typename?: 'recipe';
  id: Scalars['Int'];
  input_slots: Scalars['Int'];
  is_alternative: Scalars['Boolean'];
  name: Scalars['String'];
  output_slots: Scalars['Int'];
  /** An object relationship */
  production_structure: Production_Structure;
  production_structure_id: Scalars['Int'];
  /** An array relationship */
  recipe_inputs: Array<Recipe_Input>;
  /** An aggregated array relationship */
  recipe_inputs_aggregate: Recipe_Input_Aggregate;
  /** An array relationship */
  recipe_outputs: Array<Recipe_Output>;
  /** An aggregated array relationship */
  recipe_outputs_aggregate: Recipe_Output_Aggregate;
};


/** columns and relationships of "recipe" */
export type RecipeRecipe_InputsArgs = {
  distinct_on?: Maybe<Array<Recipe_Input_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Input_Order_By>>;
  where?: Maybe<Recipe_Input_Bool_Exp>;
};


/** columns and relationships of "recipe" */
export type RecipeRecipe_Inputs_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Input_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Input_Order_By>>;
  where?: Maybe<Recipe_Input_Bool_Exp>;
};


/** columns and relationships of "recipe" */
export type RecipeRecipe_OutputsArgs = {
  distinct_on?: Maybe<Array<Recipe_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Output_Order_By>>;
  where?: Maybe<Recipe_Output_Bool_Exp>;
};


/** columns and relationships of "recipe" */
export type RecipeRecipe_Outputs_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Output_Order_By>>;
  where?: Maybe<Recipe_Output_Bool_Exp>;
};

/** aggregated selection of "recipe" */
export type Recipe_Aggregate = {
  __typename?: 'recipe_aggregate';
  aggregate?: Maybe<Recipe_Aggregate_Fields>;
  nodes: Array<Recipe>;
};

/** aggregate fields of "recipe" */
export type Recipe_Aggregate_Fields = {
  __typename?: 'recipe_aggregate_fields';
  avg?: Maybe<Recipe_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Recipe_Max_Fields>;
  min?: Maybe<Recipe_Min_Fields>;
  stddev?: Maybe<Recipe_Stddev_Fields>;
  stddev_pop?: Maybe<Recipe_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Recipe_Stddev_Samp_Fields>;
  sum?: Maybe<Recipe_Sum_Fields>;
  var_pop?: Maybe<Recipe_Var_Pop_Fields>;
  var_samp?: Maybe<Recipe_Var_Samp_Fields>;
  variance?: Maybe<Recipe_Variance_Fields>;
};


/** aggregate fields of "recipe" */
export type Recipe_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Recipe_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "recipe" */
export type Recipe_Aggregate_Order_By = {
  avg?: Maybe<Recipe_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Recipe_Max_Order_By>;
  min?: Maybe<Recipe_Min_Order_By>;
  stddev?: Maybe<Recipe_Stddev_Order_By>;
  stddev_pop?: Maybe<Recipe_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Recipe_Stddev_Samp_Order_By>;
  sum?: Maybe<Recipe_Sum_Order_By>;
  var_pop?: Maybe<Recipe_Var_Pop_Order_By>;
  var_samp?: Maybe<Recipe_Var_Samp_Order_By>;
  variance?: Maybe<Recipe_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recipe" */
export type Recipe_Arr_Rel_Insert_Input = {
  data: Array<Recipe_Insert_Input>;
  on_conflict?: Maybe<Recipe_On_Conflict>;
};

/** aggregate avg on columns */
export type Recipe_Avg_Fields = {
  __typename?: 'recipe_avg_fields';
  id?: Maybe<Scalars['Float']>;
  input_slots?: Maybe<Scalars['Float']>;
  output_slots?: Maybe<Scalars['Float']>;
  production_structure_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "recipe" */
export type Recipe_Avg_Order_By = {
  id?: Maybe<Order_By>;
  input_slots?: Maybe<Order_By>;
  output_slots?: Maybe<Order_By>;
  production_structure_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recipe". All fields are combined with a logical 'AND'. */
export type Recipe_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Recipe_Bool_Exp>>>;
  _not?: Maybe<Recipe_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Recipe_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  input_slots?: Maybe<Int_Comparison_Exp>;
  is_alternative?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  output_slots?: Maybe<Int_Comparison_Exp>;
  production_structure?: Maybe<Production_Structure_Bool_Exp>;
  production_structure_id?: Maybe<Int_Comparison_Exp>;
  recipe_inputs?: Maybe<Recipe_Input_Bool_Exp>;
  recipe_outputs?: Maybe<Recipe_Output_Bool_Exp>;
};

/** unique or primary key constraints on table "recipe" */
export enum Recipe_Constraint {
  /** unique or primary key constraint */
  RecipePkey = 'recipe_pkey'
}

/** input type for incrementing integer column in table "recipe" */
export type Recipe_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  input_slots?: Maybe<Scalars['Int']>;
  output_slots?: Maybe<Scalars['Int']>;
  production_structure_id?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "recipe_input" */
export type Recipe_Input = {
  __typename?: 'recipe_input';
  amount: Scalars['numeric'];
  component_id: Scalars['Int'];
  recipe_id: Scalars['Int'];
};

/** aggregated selection of "recipe_input" */
export type Recipe_Input_Aggregate = {
  __typename?: 'recipe_input_aggregate';
  aggregate?: Maybe<Recipe_Input_Aggregate_Fields>;
  nodes: Array<Recipe_Input>;
};

/** aggregate fields of "recipe_input" */
export type Recipe_Input_Aggregate_Fields = {
  __typename?: 'recipe_input_aggregate_fields';
  avg?: Maybe<Recipe_Input_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Recipe_Input_Max_Fields>;
  min?: Maybe<Recipe_Input_Min_Fields>;
  stddev?: Maybe<Recipe_Input_Stddev_Fields>;
  stddev_pop?: Maybe<Recipe_Input_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Recipe_Input_Stddev_Samp_Fields>;
  sum?: Maybe<Recipe_Input_Sum_Fields>;
  var_pop?: Maybe<Recipe_Input_Var_Pop_Fields>;
  var_samp?: Maybe<Recipe_Input_Var_Samp_Fields>;
  variance?: Maybe<Recipe_Input_Variance_Fields>;
};


/** aggregate fields of "recipe_input" */
export type Recipe_Input_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Recipe_Input_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "recipe_input" */
export type Recipe_Input_Aggregate_Order_By = {
  avg?: Maybe<Recipe_Input_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Recipe_Input_Max_Order_By>;
  min?: Maybe<Recipe_Input_Min_Order_By>;
  stddev?: Maybe<Recipe_Input_Stddev_Order_By>;
  stddev_pop?: Maybe<Recipe_Input_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Recipe_Input_Stddev_Samp_Order_By>;
  sum?: Maybe<Recipe_Input_Sum_Order_By>;
  var_pop?: Maybe<Recipe_Input_Var_Pop_Order_By>;
  var_samp?: Maybe<Recipe_Input_Var_Samp_Order_By>;
  variance?: Maybe<Recipe_Input_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recipe_input" */
export type Recipe_Input_Arr_Rel_Insert_Input = {
  data: Array<Recipe_Input_Insert_Input>;
  on_conflict?: Maybe<Recipe_Input_On_Conflict>;
};

/** aggregate avg on columns */
export type Recipe_Input_Avg_Fields = {
  __typename?: 'recipe_input_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  component_id?: Maybe<Scalars['Float']>;
  recipe_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "recipe_input" */
export type Recipe_Input_Avg_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recipe_input". All fields are combined with a logical 'AND'. */
export type Recipe_Input_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Recipe_Input_Bool_Exp>>>;
  _not?: Maybe<Recipe_Input_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Recipe_Input_Bool_Exp>>>;
  amount?: Maybe<Numeric_Comparison_Exp>;
  component_id?: Maybe<Int_Comparison_Exp>;
  recipe_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "recipe_input" */
export enum Recipe_Input_Constraint {
  /** unique or primary key constraint */
  RecipeInputPkey = 'recipe_input_pkey'
}

/** input type for incrementing integer column in table "recipe_input" */
export type Recipe_Input_Inc_Input = {
  amount?: Maybe<Scalars['numeric']>;
  component_id?: Maybe<Scalars['Int']>;
  recipe_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "recipe_input" */
export type Recipe_Input_Insert_Input = {
  amount?: Maybe<Scalars['numeric']>;
  component_id?: Maybe<Scalars['Int']>;
  recipe_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Recipe_Input_Max_Fields = {
  __typename?: 'recipe_input_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  component_id?: Maybe<Scalars['Int']>;
  recipe_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "recipe_input" */
export type Recipe_Input_Max_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Recipe_Input_Min_Fields = {
  __typename?: 'recipe_input_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  component_id?: Maybe<Scalars['Int']>;
  recipe_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "recipe_input" */
export type Recipe_Input_Min_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "recipe_input" */
export type Recipe_Input_Mutation_Response = {
  __typename?: 'recipe_input_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Recipe_Input>;
};

/** input type for inserting object relation for remote table "recipe_input" */
export type Recipe_Input_Obj_Rel_Insert_Input = {
  data: Recipe_Input_Insert_Input;
  on_conflict?: Maybe<Recipe_Input_On_Conflict>;
};

/** on conflict condition type for table "recipe_input" */
export type Recipe_Input_On_Conflict = {
  constraint: Recipe_Input_Constraint;
  update_columns: Array<Recipe_Input_Update_Column>;
  where?: Maybe<Recipe_Input_Bool_Exp>;
};

/** ordering options when selecting data from "recipe_input" */
export type Recipe_Input_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "recipe_input" */
export type Recipe_Input_Pk_Columns_Input = {
  component_id: Scalars['Int'];
  recipe_id: Scalars['Int'];
};

/** select columns of table "recipe_input" */
export enum Recipe_Input_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ComponentId = 'component_id',
  /** column name */
  RecipeId = 'recipe_id'
}

/** input type for updating data in table "recipe_input" */
export type Recipe_Input_Set_Input = {
  amount?: Maybe<Scalars['numeric']>;
  component_id?: Maybe<Scalars['Int']>;
  recipe_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Recipe_Input_Stddev_Fields = {
  __typename?: 'recipe_input_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  component_id?: Maybe<Scalars['Float']>;
  recipe_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "recipe_input" */
export type Recipe_Input_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recipe_Input_Stddev_Pop_Fields = {
  __typename?: 'recipe_input_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  component_id?: Maybe<Scalars['Float']>;
  recipe_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "recipe_input" */
export type Recipe_Input_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recipe_Input_Stddev_Samp_Fields = {
  __typename?: 'recipe_input_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  component_id?: Maybe<Scalars['Float']>;
  recipe_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "recipe_input" */
export type Recipe_Input_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Recipe_Input_Sum_Fields = {
  __typename?: 'recipe_input_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  component_id?: Maybe<Scalars['Int']>;
  recipe_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "recipe_input" */
export type Recipe_Input_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** update columns of table "recipe_input" */
export enum Recipe_Input_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ComponentId = 'component_id',
  /** column name */
  RecipeId = 'recipe_id'
}

/** aggregate var_pop on columns */
export type Recipe_Input_Var_Pop_Fields = {
  __typename?: 'recipe_input_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  component_id?: Maybe<Scalars['Float']>;
  recipe_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "recipe_input" */
export type Recipe_Input_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recipe_Input_Var_Samp_Fields = {
  __typename?: 'recipe_input_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  component_id?: Maybe<Scalars['Float']>;
  recipe_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "recipe_input" */
export type Recipe_Input_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Recipe_Input_Variance_Fields = {
  __typename?: 'recipe_input_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  component_id?: Maybe<Scalars['Float']>;
  recipe_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "recipe_input" */
export type Recipe_Input_Variance_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** input type for inserting data into table "recipe" */
export type Recipe_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  input_slots?: Maybe<Scalars['Int']>;
  is_alternative?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  output_slots?: Maybe<Scalars['Int']>;
  production_structure?: Maybe<Production_Structure_Obj_Rel_Insert_Input>;
  production_structure_id?: Maybe<Scalars['Int']>;
  recipe_inputs?: Maybe<Recipe_Input_Arr_Rel_Insert_Input>;
  recipe_outputs?: Maybe<Recipe_Output_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Recipe_Max_Fields = {
  __typename?: 'recipe_max_fields';
  id?: Maybe<Scalars['Int']>;
  input_slots?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  output_slots?: Maybe<Scalars['Int']>;
  production_structure_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "recipe" */
export type Recipe_Max_Order_By = {
  id?: Maybe<Order_By>;
  input_slots?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  output_slots?: Maybe<Order_By>;
  production_structure_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Recipe_Min_Fields = {
  __typename?: 'recipe_min_fields';
  id?: Maybe<Scalars['Int']>;
  input_slots?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  output_slots?: Maybe<Scalars['Int']>;
  production_structure_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "recipe" */
export type Recipe_Min_Order_By = {
  id?: Maybe<Order_By>;
  input_slots?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  output_slots?: Maybe<Order_By>;
  production_structure_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "recipe" */
export type Recipe_Mutation_Response = {
  __typename?: 'recipe_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Recipe>;
};

/** input type for inserting object relation for remote table "recipe" */
export type Recipe_Obj_Rel_Insert_Input = {
  data: Recipe_Insert_Input;
  on_conflict?: Maybe<Recipe_On_Conflict>;
};

/** on conflict condition type for table "recipe" */
export type Recipe_On_Conflict = {
  constraint: Recipe_Constraint;
  update_columns: Array<Recipe_Update_Column>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** ordering options when selecting data from "recipe" */
export type Recipe_Order_By = {
  id?: Maybe<Order_By>;
  input_slots?: Maybe<Order_By>;
  is_alternative?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  output_slots?: Maybe<Order_By>;
  production_structure?: Maybe<Production_Structure_Order_By>;
  production_structure_id?: Maybe<Order_By>;
  recipe_inputs_aggregate?: Maybe<Recipe_Input_Aggregate_Order_By>;
  recipe_outputs_aggregate?: Maybe<Recipe_Output_Aggregate_Order_By>;
};

/** columns and relationships of "recipe_output" */
export type Recipe_Output = {
  __typename?: 'recipe_output';
  amount: Scalars['numeric'];
  /** An object relationship */
  component: Component;
  component_id: Scalars['Int'];
  /** An object relationship */
  recipe: Recipe;
  recipe_id: Scalars['Int'];
};

/** aggregated selection of "recipe_output" */
export type Recipe_Output_Aggregate = {
  __typename?: 'recipe_output_aggregate';
  aggregate?: Maybe<Recipe_Output_Aggregate_Fields>;
  nodes: Array<Recipe_Output>;
};

/** aggregate fields of "recipe_output" */
export type Recipe_Output_Aggregate_Fields = {
  __typename?: 'recipe_output_aggregate_fields';
  avg?: Maybe<Recipe_Output_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Recipe_Output_Max_Fields>;
  min?: Maybe<Recipe_Output_Min_Fields>;
  stddev?: Maybe<Recipe_Output_Stddev_Fields>;
  stddev_pop?: Maybe<Recipe_Output_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Recipe_Output_Stddev_Samp_Fields>;
  sum?: Maybe<Recipe_Output_Sum_Fields>;
  var_pop?: Maybe<Recipe_Output_Var_Pop_Fields>;
  var_samp?: Maybe<Recipe_Output_Var_Samp_Fields>;
  variance?: Maybe<Recipe_Output_Variance_Fields>;
};


/** aggregate fields of "recipe_output" */
export type Recipe_Output_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Recipe_Output_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "recipe_output" */
export type Recipe_Output_Aggregate_Order_By = {
  avg?: Maybe<Recipe_Output_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Recipe_Output_Max_Order_By>;
  min?: Maybe<Recipe_Output_Min_Order_By>;
  stddev?: Maybe<Recipe_Output_Stddev_Order_By>;
  stddev_pop?: Maybe<Recipe_Output_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Recipe_Output_Stddev_Samp_Order_By>;
  sum?: Maybe<Recipe_Output_Sum_Order_By>;
  var_pop?: Maybe<Recipe_Output_Var_Pop_Order_By>;
  var_samp?: Maybe<Recipe_Output_Var_Samp_Order_By>;
  variance?: Maybe<Recipe_Output_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recipe_output" */
export type Recipe_Output_Arr_Rel_Insert_Input = {
  data: Array<Recipe_Output_Insert_Input>;
  on_conflict?: Maybe<Recipe_Output_On_Conflict>;
};

/** aggregate avg on columns */
export type Recipe_Output_Avg_Fields = {
  __typename?: 'recipe_output_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  component_id?: Maybe<Scalars['Float']>;
  recipe_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "recipe_output" */
export type Recipe_Output_Avg_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recipe_output". All fields are combined with a logical 'AND'. */
export type Recipe_Output_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Recipe_Output_Bool_Exp>>>;
  _not?: Maybe<Recipe_Output_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Recipe_Output_Bool_Exp>>>;
  amount?: Maybe<Numeric_Comparison_Exp>;
  component?: Maybe<Component_Bool_Exp>;
  component_id?: Maybe<Int_Comparison_Exp>;
  recipe?: Maybe<Recipe_Bool_Exp>;
  recipe_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "recipe_output" */
export enum Recipe_Output_Constraint {
  /** unique or primary key constraint */
  RecipeOutputPkey = 'recipe_output_pkey'
}

/** input type for incrementing integer column in table "recipe_output" */
export type Recipe_Output_Inc_Input = {
  amount?: Maybe<Scalars['numeric']>;
  component_id?: Maybe<Scalars['Int']>;
  recipe_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "recipe_output" */
export type Recipe_Output_Insert_Input = {
  amount?: Maybe<Scalars['numeric']>;
  component?: Maybe<Component_Obj_Rel_Insert_Input>;
  component_id?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Recipe_Obj_Rel_Insert_Input>;
  recipe_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Recipe_Output_Max_Fields = {
  __typename?: 'recipe_output_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  component_id?: Maybe<Scalars['Int']>;
  recipe_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "recipe_output" */
export type Recipe_Output_Max_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Recipe_Output_Min_Fields = {
  __typename?: 'recipe_output_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  component_id?: Maybe<Scalars['Int']>;
  recipe_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "recipe_output" */
export type Recipe_Output_Min_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "recipe_output" */
export type Recipe_Output_Mutation_Response = {
  __typename?: 'recipe_output_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Recipe_Output>;
};

/** input type for inserting object relation for remote table "recipe_output" */
export type Recipe_Output_Obj_Rel_Insert_Input = {
  data: Recipe_Output_Insert_Input;
  on_conflict?: Maybe<Recipe_Output_On_Conflict>;
};

/** on conflict condition type for table "recipe_output" */
export type Recipe_Output_On_Conflict = {
  constraint: Recipe_Output_Constraint;
  update_columns: Array<Recipe_Output_Update_Column>;
  where?: Maybe<Recipe_Output_Bool_Exp>;
};

/** ordering options when selecting data from "recipe_output" */
export type Recipe_Output_Order_By = {
  amount?: Maybe<Order_By>;
  component?: Maybe<Component_Order_By>;
  component_id?: Maybe<Order_By>;
  recipe?: Maybe<Recipe_Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "recipe_output" */
export type Recipe_Output_Pk_Columns_Input = {
  component_id: Scalars['Int'];
  recipe_id: Scalars['Int'];
};

/** select columns of table "recipe_output" */
export enum Recipe_Output_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ComponentId = 'component_id',
  /** column name */
  RecipeId = 'recipe_id'
}

/** input type for updating data in table "recipe_output" */
export type Recipe_Output_Set_Input = {
  amount?: Maybe<Scalars['numeric']>;
  component_id?: Maybe<Scalars['Int']>;
  recipe_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Recipe_Output_Stddev_Fields = {
  __typename?: 'recipe_output_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  component_id?: Maybe<Scalars['Float']>;
  recipe_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "recipe_output" */
export type Recipe_Output_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recipe_Output_Stddev_Pop_Fields = {
  __typename?: 'recipe_output_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  component_id?: Maybe<Scalars['Float']>;
  recipe_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "recipe_output" */
export type Recipe_Output_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recipe_Output_Stddev_Samp_Fields = {
  __typename?: 'recipe_output_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  component_id?: Maybe<Scalars['Float']>;
  recipe_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "recipe_output" */
export type Recipe_Output_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Recipe_Output_Sum_Fields = {
  __typename?: 'recipe_output_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  component_id?: Maybe<Scalars['Int']>;
  recipe_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "recipe_output" */
export type Recipe_Output_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** update columns of table "recipe_output" */
export enum Recipe_Output_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ComponentId = 'component_id',
  /** column name */
  RecipeId = 'recipe_id'
}

/** aggregate var_pop on columns */
export type Recipe_Output_Var_Pop_Fields = {
  __typename?: 'recipe_output_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  component_id?: Maybe<Scalars['Float']>;
  recipe_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "recipe_output" */
export type Recipe_Output_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recipe_Output_Var_Samp_Fields = {
  __typename?: 'recipe_output_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  component_id?: Maybe<Scalars['Float']>;
  recipe_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "recipe_output" */
export type Recipe_Output_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Recipe_Output_Variance_Fields = {
  __typename?: 'recipe_output_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  component_id?: Maybe<Scalars['Float']>;
  recipe_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "recipe_output" */
export type Recipe_Output_Variance_Order_By = {
  amount?: Maybe<Order_By>;
  component_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "recipe" */
export type Recipe_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "recipe" */
export enum Recipe_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InputSlots = 'input_slots',
  /** column name */
  IsAlternative = 'is_alternative',
  /** column name */
  Name = 'name',
  /** column name */
  OutputSlots = 'output_slots',
  /** column name */
  ProductionStructureId = 'production_structure_id'
}

/** input type for updating data in table "recipe" */
export type Recipe_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  input_slots?: Maybe<Scalars['Int']>;
  is_alternative?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  output_slots?: Maybe<Scalars['Int']>;
  production_structure_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Recipe_Stddev_Fields = {
  __typename?: 'recipe_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  input_slots?: Maybe<Scalars['Float']>;
  output_slots?: Maybe<Scalars['Float']>;
  production_structure_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "recipe" */
export type Recipe_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  input_slots?: Maybe<Order_By>;
  output_slots?: Maybe<Order_By>;
  production_structure_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recipe_Stddev_Pop_Fields = {
  __typename?: 'recipe_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  input_slots?: Maybe<Scalars['Float']>;
  output_slots?: Maybe<Scalars['Float']>;
  production_structure_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "recipe" */
export type Recipe_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  input_slots?: Maybe<Order_By>;
  output_slots?: Maybe<Order_By>;
  production_structure_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recipe_Stddev_Samp_Fields = {
  __typename?: 'recipe_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  input_slots?: Maybe<Scalars['Float']>;
  output_slots?: Maybe<Scalars['Float']>;
  production_structure_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "recipe" */
export type Recipe_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  input_slots?: Maybe<Order_By>;
  output_slots?: Maybe<Order_By>;
  production_structure_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Recipe_Sum_Fields = {
  __typename?: 'recipe_sum_fields';
  id?: Maybe<Scalars['Int']>;
  input_slots?: Maybe<Scalars['Int']>;
  output_slots?: Maybe<Scalars['Int']>;
  production_structure_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "recipe" */
export type Recipe_Sum_Order_By = {
  id?: Maybe<Order_By>;
  input_slots?: Maybe<Order_By>;
  output_slots?: Maybe<Order_By>;
  production_structure_id?: Maybe<Order_By>;
};

/** update columns of table "recipe" */
export enum Recipe_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InputSlots = 'input_slots',
  /** column name */
  IsAlternative = 'is_alternative',
  /** column name */
  Name = 'name',
  /** column name */
  OutputSlots = 'output_slots',
  /** column name */
  ProductionStructureId = 'production_structure_id'
}

/** aggregate var_pop on columns */
export type Recipe_Var_Pop_Fields = {
  __typename?: 'recipe_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  input_slots?: Maybe<Scalars['Float']>;
  output_slots?: Maybe<Scalars['Float']>;
  production_structure_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "recipe" */
export type Recipe_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  input_slots?: Maybe<Order_By>;
  output_slots?: Maybe<Order_By>;
  production_structure_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recipe_Var_Samp_Fields = {
  __typename?: 'recipe_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  input_slots?: Maybe<Scalars['Float']>;
  output_slots?: Maybe<Scalars['Float']>;
  production_structure_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "recipe" */
export type Recipe_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  input_slots?: Maybe<Order_By>;
  output_slots?: Maybe<Order_By>;
  production_structure_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Recipe_Variance_Fields = {
  __typename?: 'recipe_variance_fields';
  id?: Maybe<Scalars['Float']>;
  input_slots?: Maybe<Scalars['Float']>;
  output_slots?: Maybe<Scalars['Float']>;
  production_structure_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "recipe" */
export type Recipe_Variance_Order_By = {
  id?: Maybe<Order_By>;
  input_slots?: Maybe<Order_By>;
  output_slots?: Maybe<Order_By>;
  production_structure_id?: Maybe<Order_By>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "component" */
  component: Array<Component>;
  /** fetch aggregated fields from the table: "component" */
  component_aggregate: Component_Aggregate;
  /** fetch data from the table: "component" using primary key columns */
  component_by_pk?: Maybe<Component>;
  /** fetch data from the table: "production_structure" */
  production_structure: Array<Production_Structure>;
  /** fetch aggregated fields from the table: "production_structure" */
  production_structure_aggregate: Production_Structure_Aggregate;
  /** fetch data from the table: "production_structure" using primary key columns */
  production_structure_by_pk?: Maybe<Production_Structure>;
  /** fetch data from the table: "recipe" */
  recipe: Array<Recipe>;
  /** fetch aggregated fields from the table: "recipe" */
  recipe_aggregate: Recipe_Aggregate;
  /** fetch data from the table: "recipe" using primary key columns */
  recipe_by_pk?: Maybe<Recipe>;
  /** fetch data from the table: "recipe_input" */
  recipe_input: Array<Recipe_Input>;
  /** fetch aggregated fields from the table: "recipe_input" */
  recipe_input_aggregate: Recipe_Input_Aggregate;
  /** fetch data from the table: "recipe_input" using primary key columns */
  recipe_input_by_pk?: Maybe<Recipe_Input>;
  /** fetch data from the table: "recipe_output" */
  recipe_output: Array<Recipe_Output>;
  /** fetch aggregated fields from the table: "recipe_output" */
  recipe_output_aggregate: Recipe_Output_Aggregate;
  /** fetch data from the table: "recipe_output" using primary key columns */
  recipe_output_by_pk?: Maybe<Recipe_Output>;
};


/** subscription root */
export type Subscription_RootComponentArgs = {
  distinct_on?: Maybe<Array<Component_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Component_Order_By>>;
  where?: Maybe<Component_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComponent_AggregateArgs = {
  distinct_on?: Maybe<Array<Component_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Component_Order_By>>;
  where?: Maybe<Component_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComponent_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootProduction_StructureArgs = {
  distinct_on?: Maybe<Array<Production_Structure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Production_Structure_Order_By>>;
  where?: Maybe<Production_Structure_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduction_Structure_AggregateArgs = {
  distinct_on?: Maybe<Array<Production_Structure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Production_Structure_Order_By>>;
  where?: Maybe<Production_Structure_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduction_Structure_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRecipeArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRecipe_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRecipe_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRecipe_InputArgs = {
  distinct_on?: Maybe<Array<Recipe_Input_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Input_Order_By>>;
  where?: Maybe<Recipe_Input_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRecipe_Input_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Input_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Input_Order_By>>;
  where?: Maybe<Recipe_Input_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRecipe_Input_By_PkArgs = {
  component_id: Scalars['Int'];
  recipe_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRecipe_OutputArgs = {
  distinct_on?: Maybe<Array<Recipe_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Output_Order_By>>;
  where?: Maybe<Recipe_Output_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRecipe_Output_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Output_Order_By>>;
  where?: Maybe<Recipe_Output_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRecipe_Output_By_PkArgs = {
  component_id: Scalars['Int'];
  recipe_id: Scalars['Int'];
};

export type InsertProductionStructureMutationVariables = Exact<{
  liquid_input?: Maybe<Scalars['Int']>;
  liquid_output?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  solid_input?: Maybe<Scalars['Int']>;
  solid_output?: Maybe<Scalars['Int']>;
  subcategory?: Maybe<Scalars['String']>;
  energy_consumption?: Maybe<Scalars['numeric']>;
}>;


export type InsertProductionStructureMutation = (
  { __typename?: 'mutation_root' }
  & { insert_production_structure_one?: Maybe<(
    { __typename?: 'production_structure' }
    & Pick<Production_Structure, 'id'>
  )> }
);

export type GetProductionListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductionListQuery = (
  { __typename?: 'query_root' }
  & { production_structure: Array<(
    { __typename?: 'production_structure' }
    & Pick<Production_Structure, 'name' | 'subcategory' | 'energy_consumption' | 'id' | 'image_url'>
    & { recipes: Array<(
      { __typename?: 'recipe' }
      & Pick<Recipe, 'name' | 'id'>
    )> }
  )> }
);

export type GetRecipeListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecipeListQuery = (
  { __typename?: 'query_root' }
  & { recipe: Array<(
    { __typename?: 'recipe' }
    & Pick<Recipe, 'id' | 'name' | 'input_slots' | 'output_slots' | 'is_alternative'>
    & { production_structure: (
      { __typename?: 'production_structure' }
      & Pick<Production_Structure, 'name'>
    ), recipe_outputs: Array<(
      { __typename?: 'recipe_output' }
      & Pick<Recipe_Output, 'amount'>
      & { component: (
        { __typename?: 'component' }
        & Pick<Component, 'image_url' | 'name'>
      ) }
    )> }
  )> }
);

export const InsertProductionStructureDocument = gql`
    mutation insertProductionStructure($liquid_input: Int, $liquid_output: Int, $name: String, $solid_input: Int, $solid_output: Int, $subcategory: String, $energy_consumption: numeric) {
  insert_production_structure_one(object: {liquid_input: $liquid_input, liquid_output: $liquid_output, name: $name, solid_input: $solid_input, solid_output: $solid_output, subcategory: $subcategory, energy_consumption: $energy_consumption}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertProductionStructureGQL extends Apollo.Mutation<InsertProductionStructureMutation, InsertProductionStructureMutationVariables> {
    document = InsertProductionStructureDocument;
    
  }
export const GetProductionListDocument = gql`
    query getProductionList {
  production_structure(order_by: {name: asc}) {
    name
    subcategory
    energy_consumption
    id
    image_url
    recipes {
      name
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProductionListGQL extends Apollo.Query<GetProductionListQuery, GetProductionListQueryVariables> {
    document = GetProductionListDocument;
    
  }
export const GetRecipeListDocument = gql`
    query getRecipeList {
  recipe(order_by: {name: asc}) {
    id
    name
    input_slots
    output_slots
    is_alternative
    production_structure {
      name
    }
    recipe_outputs {
      amount
      component {
        image_url
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRecipeListGQL extends Apollo.Query<GetRecipeListQuery, GetRecipeListQueryVariables> {
    document = GetRecipeListDocument;
    
  }